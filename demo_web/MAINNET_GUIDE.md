# Guía de Configuración: Mainnet vs Testnet

## ⚠️ IMPORTANTE: Configuración Actual

Tu aplicación está configurada para **STARKNET MAINNET** - esto significa que usará **criptomonedas reales**.

## 🔄 Cambiar entre Mainnet y Testnet

Para cambiar entre redes, edita el archivo: `src/config/starknet.config.js`

```javascript
CURRENT_NETWORK: 'mainnet', // Cambiar a 'testnet' para pruebas
```

## 🌐 Diferencias entre Redes

### Mainnet (Producción)
- ✅ Red principal de Starknet
- 💰 Usa ETH real (tiene valor monetario)
- 💸 Gas fees reales (pagas por cada transacción)
- 🔗 Explorador: https://starkscan.co
- ⚠️ **CUIDADO**: Los errores pueden costar dinero real

### Testnet (Desarrollo)
- 🧪 Red de pruebas (Sepolia)
- 🎁 Usa ETH de prueba (sin valor real)
- 🆓 Gas fees de prueba (no cuestan dinero real)
- 🔗 Explorador: https://sepolia.starkscan.co
- ✅ Seguro para experimentar

## 🎯 Configuraciones Críticas

### 1. Dirección de Receptor de Pagos

**ACTUALIZAR ANTES DE USAR EN PRODUCCIÓN**

En `src/config/starknet.config.js`:

```javascript
mainnet: {
  // ⚠️ ACTUALIZAR CON TU WALLET DE MAINNET
  paymentRecipient: '0x01793c5c078B9C54d74f0dF5e8679dE82b2dc683a758aB20BAf59b8448488b60',
}
```

**Importante:**
- Esta es la dirección que recibirá todos los pagos
- Asegúrate de tener acceso a esta wallet
- Verifica la dirección varias veces antes de usarla en mainnet

### 2. Precio de ETH

El precio de ETH está hardcodeado. **En producción, usa un oracle de precios:**

```javascript
mainnet: {
  ethPriceUSD: 2500, // ⚠️ Actualizar con oracle en producción
}
```

**Opciones de Oracle:**
- [Pragma Oracle](https://www.pragma.build/) - Recomendado para Starknet
- [Chainlink](https://chain.link/)
- API externa con actualización periódica

### 3. Dirección del Token ETH

Ya configurada correctamente para Mainnet:
```
0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7
```

## 🚀 Pasos para Usar en Mainnet

### 1. Preparación

- [ ] Obtener ETH real en tu wallet de Starknet Mainnet
- [ ] Verificar que tienes suficiente ETH para gas fees
- [ ] Actualizar `paymentRecipient` con tu dirección real
- [ ] Probar primero en testnet

### 2. Obtener ETH en Mainnet

**Opción 1: Bridge desde Ethereum**
1. Ve a [Starkgate](https://starkgate.starknet.io/)
2. Conecta tu wallet de Ethereum
3. Transfiere ETH de Ethereum L1 a Starknet

**Opción 2: Exchanges**
- Compra ETH directamente en exchanges que soporten Starknet
- Retira a tu dirección de Starknet

### 3. Verificar Red en Wallet

Asegúrate de que tu wallet (Braavos, ArgentX, etc.) esté configurada en **Starknet Mainnet**:

- Braavos: Settings → Network → Mainnet
- ArgentX: Settings → Network → Mainnet

### 4. Testear en Testnet Primero

**ALTAMENTE RECOMENDADO**

Antes de usar mainnet:

1. Cambia a testnet en `starknet.config.js`
2. Obtén ETH de prueba del [faucet](https://faucet.goerli.starknet.io/)
3. Prueba todas las funcionalidades
4. Verifica que todo funciona correctamente
5. Solo entonces cambia a mainnet

## 💰 Gas Fees

### Mainnet
- **Costo aproximado por transacción**: 0.0001 - 0.001 ETH (~$0.25 - $2.50 USD)
- Varía según la congestión de la red
- Los usuarios deben tener ETH para pagar gas

### Testnet
- Gratis (ETH de prueba)
- Puedes obtener más del faucet

## 🔐 Seguridad

### Mainnet
- ⚠️ Nunca compartas tu private key
- ✅ Usa wallets hardware para montos grandes
- ✅ Verifica todas las transacciones antes de firmar
- ✅ Haz auditorías de seguridad del smart contract antes de mainnet
- ✅ Usa multisig para fondos importantes

### Variables de Entorno
Nunca hagas commit de:
- Private keys
- Seed phrases
- API keys de servicios de precio

## 📊 Monitoreo

### Ver Transacciones

```javascript
import { getTransactionUrl } from './config/starknet.config';

console.log('Ver transacción:', getTransactionUrl(txHash));
```

### Explorador de Bloques

**Mainnet**: https://starkscan.co
- Ver transacciones
- Ver balances
- Ver contratos

**Testnet**: https://sepolia.starkscan.co

## 🐛 Troubleshooting

### "Insufficient balance for transfer"
- No tienes suficiente ETH en tu wallet
- Asegúrate de tener ETH + gas fees

### "Invalid transaction nonce"
- Refresca tu wallet
- Espera a que se confirme la transacción anterior

### Transacción pendiente por mucho tiempo
- Verifica en el explorador de bloques
- La red puede estar congestionada
- En mainnet, esto puede tomar varios minutos

## 📝 Checklist Pre-Mainnet

Antes de lanzar en mainnet, verifica:

- [ ] Código auditado
- [ ] Probado completamente en testnet
- [ ] `paymentRecipient` actualizado con dirección correcta
- [ ] Oracle de precios implementado (no hardcoded)
- [ ] Manejo de errores robusto
- [ ] Logs de monitoreo configurados
- [ ] Límites de transacción implementados
- [ ] Sistema de reembolsos probado
- [ ] Documentación completa

## 🆘 Soporte

Si necesitas ayuda:
- [Starknet Discord](https://discord.gg/starknet)
- [Starknet Docs](https://docs.starknet.io/)
- [Starknet Shamans](https://community.starknet.io/)

---

**Recuerda**: En mainnet, los errores cuestan dinero real. Prueba todo exhaustivamente en testnet primero.
