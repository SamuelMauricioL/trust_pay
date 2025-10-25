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
}
