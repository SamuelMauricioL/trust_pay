# Guía de Deployment - CourseEscrow

Esta guía te ayudará a desplegar el smart contract `CourseEscrow` en Starknet Mainnet.

## ⚠️ Pre-requisitos

1. **ETH en Mainnet**: Necesitas ~0.01-0.05 ETH en tu wallet para gas fees
2. **Private Key**: La private key de tu Ready Wallet
3. **Herramientas instaladas**:
   - Scarb (compilador Cairo)
   - Starknet Foundry (`sncast`)

## 📋 Paso 1: Configurar Variables

1. Abre el archivo `.env.deployment`
2. Descomenta y agrega tu **private key**:

```bash
# Private key de tu cuenta (MANTENER SECRETO)
ACCOUNT_PRIVATE_KEY=0xTU_PRIVATE_KEY_AQUI
```

### 🔑 Cómo obtener tu Private Key

**Ready Wallet:**
1. Abre la extensión de Ready Wallet
2. Ve a Settings → Export Private Key
3. Confirma con tu contraseña
4. Copia la private key (empieza con 0x...)

**⚠️ IMPORTANTE:**
- NUNCA compartas tu private key
- NUNCA hagas commit del archivo `.env.deployment`
- El archivo ya está en `.gitignore`

## 🚀 Paso 2: Ejecutar Deployment

Una vez configurada la private key, ejecuta:

```bash
./deploy_mainnet.sh
```

El script hará automáticamente:
1. ✅ Compilar el contrato
2. ✅ Declarar el contrato en Starknet (registrar la clase)
3. ✅ Desplegar una instancia del contrato
4. ✅ Mostrar la dirección del contrato desplegado

## 📊 Paso 3: Verificar Deployment

Al finalizar, verás algo como:

```
✅ ¡Deployment exitoso!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Contract Address: 0x...
🔗 Class Hash: 0x...
🌐 Explorador: https://starkscan.co/contract/0x...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Verifica en Starkscan:**
1. Abre el link del explorador
2. Confirma que el contrato esté desplegado
3. Revisa la transacción de deployment

## 🔧 Paso 4: Actualizar Frontend

Actualiza la dirección del contrato en tu aplicación web:

```javascript
// demo_web/src/config/starknet.config.js
export const NETWORK_CONFIG = {
  mainnet: {
    // ... otras configuraciones
    escrowContractAddress: '0xDIRECCION_DEL_CONTRATO_AQUI',
  }
}
```

## 📝 Parámetros del Contrato

El contrato fue desplegado con:

- **Token Address**: `0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7` (ETH)
- **Oracle Address**: Tu Ready Wallet (`0x02Fbdb...eDa8`)
  - Esta dirección puede llamar a `fulfill_refund()`
  - Puedes cambiarla después con `set_oracle_address()`

## 🧪 Paso 5: Probar el Contrato

### Función: deposit()

Crear un nuevo holdeo/escrow:

```bash
sncast \
  --url https://starknet-mainnet.public.blastapi.io/rpc/v0_7 \
  --account-address 0x02Fbdb... \
  --private-key 0x... \
  invoke \
  --contract-address 0xCONTRATO_ESCROW \
  --function "deposit" \
  --calldata 123 0x02Fbdb... 86400 1000000000000000000 0
```

Parámetros:
- `purchase_id`: 123 (ID único)
- `course_owner`: Dirección del dueño del curso
- `refund_duration_seconds`: 86400 (24 horas)
- `amount`: Monto en wei (low, high para u256)

### Función: fulfill_refund()

Liquidar un escrow (solo oracle):

```bash
sncast invoke \
  --contract-address 0xCONTRATO_ESCROW \
  --function "fulfill_refund" \
  --calldata 123 50
```

Parámetros:
- `purchase_id`: 123
- `refund_percentage`: 50 (50% reembolso, 50% al owner)

### Función: release_funds()

Liberar fondos después de expiración (cualquiera puede llamar):

```bash
sncast invoke \
  --contract-address 0xCONTRATO_ESCROW \
  --function "release_funds" \
  --calldata 123
```

## 🔒 Seguridad

### Cambiar Oracle Address

Si necesitas cambiar quién puede llamar `fulfill_refund()`:

```bash
sncast invoke \
  --contract-address 0xCONTRATO_ESCROW \
  --function "set_oracle_address" \
  --calldata 0xNUEVA_DIRECCION_ORACLE
```

**Nota:** Solo el owner (quien desplegó) puede hacer esto.

## 💰 Costos Estimados

- **Declare**: ~0.005-0.01 ETH ($20-40 USD)
- **Deploy**: ~0.005-0.01 ETH ($20-40 USD)
- **Total**: ~0.01-0.02 ETH ($40-80 USD)

Los costos varían según la congestión de la red.

## 🐛 Troubleshooting

### Error: "Insufficient balance"
- Necesitas más ETH en tu wallet para gas fees
- Transfiere al menos 0.02 ETH a tu wallet

### Error: "Invalid private key"
- Verifica que la private key sea correcta
- Debe empezar con `0x`
- Debe tener 64 caracteres hexadecimales

### Error: "Nonce is invalid"
- Espera a que la transacción anterior se confirme
- Refresca tu wallet

### El contrato ya está declarado
- Si ves "class hash already declared", es normal
- El script intentará usar el class hash existente
- Esto ahorra gas fees

## 📚 Recursos

- [Starknet Docs](https://docs.starknet.io/)
- [Starknet Foundry](https://foundry-rs.github.io/starknet-foundry/)
- [Starkscan](https://starkscan.co/)
- [Cairo Book](https://book.cairo-lang.org/)

## 🆘 Soporte

Si encuentras problemas:
1. Verifica los logs del script
2. Busca la transacción en Starkscan
3. Revisa el código del contrato en `src/lib.cairo`
