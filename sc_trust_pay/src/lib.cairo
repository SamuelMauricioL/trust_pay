// Contrato de Holdeo Temporal (Escrow) - Starknet (Cairo 1.0)

// Dependencias
use starknet::ContractAddress;

// Interfaz del token (asumiendo ETH/STRK)
#[starknet::interface]
trait ITokenContract<TContractState> {
    fn transfer(ref self: TContractState, recipient: ContractAddress, amount: u256);
}

#[starknet::contract]
mod CourseEscrow {
    use core::integer::u256;
    use core::num::traits::Zero;
    use starknet::storage::{
        Map, StorageMapReadAccess, StorageMapWriteAccess, StoragePointerReadAccess,
        StoragePointerWriteAccess,
    };
    use starknet::{ContractAddress, get_block_timestamp, get_caller_address};
    use super::{ITokenContractDispatcher, ITokenContractDispatcherTrait};

    // --- ESTRUCTURAS DE DATOS ---

    #[derive(Drop, Serde, starknet::Store)]
    struct Purchase {
        buyer: ContractAddress,
        owner: ContractAddress,
        amount: u256,
        expiration_time: u64,
        settled: bool // Usamos 'settled' en lugar de released/refunded
    }

    // --- ALMACENAMIENTO ---

    #[storage]
    struct Storage {
        purchases: Map<u128, Purchase>,
        owner: ContractAddress,
        token_contract_address: ContractAddress,
        oracle_address: ContractAddress // Solo esta dirección puede llamar a fulfill_refund
    }

    // --- CONSTRUCTOR & CONFIGURACIÓN ---

    #[constructor]
    fn constructor(
        ref self: ContractState, token_addr: ContractAddress, initial_oracle_addr: ContractAddress,
    ) {
        self.owner.write(get_caller_address());
        self.token_contract_address.write(token_addr);
        self.oracle_address.write(initial_oracle_addr);
    }

    // Función para actualizar el oráculo (solo por el dueño)
    #[external(v0)]
    fn set_oracle_address(ref self: ContractState, new_oracle: ContractAddress) {
        assert(get_caller_address() == self.owner.read(), 'NOT_OWNER');
        self.oracle_address.write(new_oracle);
    }

    // --- FUNCIONES DEL CONTRATO ---

    // 1. Depósito Inicial (Iniciada por el Comprador)
    #[external(v0)]
    fn deposit(
        ref self: ContractState,
        purchase_id: u128,
        course_owner: ContractAddress,
        refund_duration_seconds: u64,
        amount: u256,
    ) {
        let caller = get_caller_address();
        let current_time = get_block_timestamp();

        assert(self.purchases.read(purchase_id).amount.is_zero(), 'ID_IN_USE');
        assert(!amount.is_zero(), 'AMOUNT_ZERO');

        // Transferir el token (ETH/STRK) del comprador a este contrato (Holdeo)
        let _token_contract = ITokenContractDispatcher {
            contract_address: self.token_contract_address.read(),
        };
        // En Starknet, se requiere un "approve" previo y luego se llama a "transfer_from"
        // Aquí simplificamos asumiendo que el token tiene una lógica de transferencia adecuada.
        // token_contract.transfer(caller, amount); // Idealmente

        // Guardar el estado del holdeo
        self
            .purchases
            .write(
                purchase_id,
                Purchase {
                    buyer: caller,
                    owner: course_owner,
                    amount,
                    expiration_time: current_time + refund_duration_seconds,
                    settled: false,
                },
            );
    }

    // 2. Liquidación Final (Llamada por el Oráculo o Keeper)
    // El Oráculo o Keeper paga el gas fee
    #[external(v0)]
    fn fulfill_refund(ref self: ContractState, purchase_id: u128, refund_percentage: u8) {
        // Solo el oráculo registrado puede llamar esta función
        assert(get_caller_address() == self.oracle_address.read(), 'NOT_ORACLE');

        let p = self.purchases.read(purchase_id);

        assert(!p.settled, 'ALREADY_SETTLED');
        assert(refund_percentage <= 100, 'INVALID_PERCENTAGE');

        // --- Cálculo de la Liquidación ---
        let amount = p.amount;
        let percentage_u256: u256 = refund_percentage.into();
        let total_u256: u256 = 100_u256;

        let refund_amount: u256 = (amount * percentage_u256) / total_u256;
        let owner_amount: u256 = amount - refund_amount;

        let mut token_contract = ITokenContractDispatcher {
            contract_address: self.token_contract_address.read(),
        };

        // Transferir fondos al comprador y al propietario
        if refund_amount > 0_u256 {
            token_contract.transfer(p.buyer, refund_amount);
        }

        if owner_amount > 0_u256 {
            token_contract.transfer(p.owner, owner_amount);
        }

        // Actualizar estado
        self
            .purchases
            .write(
                purchase_id,
                Purchase {
                    buyer: p.buyer,
                    owner: p.owner,
                    amount: p.amount,
                    expiration_time: p.expiration_time,
                    settled: true,
                },
            );
    }

    // 3. Liquidación Automática por Vencimiento (Llamada por un Keeper)
    // El Keeper paga el gas fee
    #[external(v0)]
    fn release_funds(ref self: ContractState, purchase_id: u128) {
        let current_time = get_block_timestamp();
        let p = self.purchases.read(purchase_id);

        assert(!p.amount.is_zero(), 'PURCHASE_NOT_FOUND');
        assert(current_time > p.expiration_time, 'NOT_EXPIRED_YET');
        assert(!p.settled, 'ALREADY_SETTLED');

        // Transferir todo el monto al propietario del curso
        let amount_to_release = p.amount;
        let mut token_contract = ITokenContractDispatcher {
            contract_address: self.token_contract_address.read(),
        };
        token_contract.transfer(p.owner, amount_to_release);

        self
            .purchases
            .write(
                purchase_id,
                Purchase {
                    buyer: p.buyer,
                    owner: p.owner,
                    amount: p.amount,
                    expiration_time: p.expiration_time,
                    settled: true,
                },
            );
    }
}
