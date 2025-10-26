/**
 * Configuración de Starknet
 * 
 * IMPORTANTE: 
 * - MAINNET usa criptomonedas REALES
 * - TESTNET usa criptomonedas de prueba (sin valor real)
 */

export const NETWORK_CONFIG = {
  // Cambiar a 'testnet' para desarrollo/pruebas
  CURRENT_NETWORK: 'mainnet', // 'mainnet' | 'testnet'
  
  mainnet: {
    name: 'Starknet Mainnet',
    chainId: 'SN_MAIN',
    // Dirección del contrato del token ETH en Mainnet
    ethTokenAddress: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    // Dirección Ready Wallet que recibe los pagos
    paymentRecipient: '0x02Fbdb9db892EDA97e843f7dB1c0657594E7eB7bE80eFAb2bFe400B24aaceDa8',
    explorerUrl: 'https://starkscan.co',
    // Precio aproximado de ETH en USD - USAR ORACLE EN PRODUCCIÓN
    // Actualizado: 25 Oct 2025
    ethPriceUSD: 3950,
  },
  
  testnet: {
    name: 'Starknet Sepolia Testnet',
    chainId: 'SN_SEPOLIA',
    // Dirección del contrato del token ETH en Sepolia Testnet
    ethTokenAddress: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    // Dirección que recibe los pagos en testnet
    paymentRecipient: '0x01793c5c078B9C54d74f0dF5e8679dE82b2dc683a758aB20BAf59b8448488b60',
    explorerUrl: 'https://sepolia.starkscan.co',
    // Precio de prueba
    ethPriceUSD: 2500,
  }
};

/**
 * Obtiene la configuración de la red actual
 */
export const getNetworkConfig = () => {
  const network = NETWORK_CONFIG.CURRENT_NETWORK;
  return {
    ...NETWORK_CONFIG[network],
    isMainnet: network === 'mainnet',
    network
  };
};

/**
 * Obtiene la URL del explorador de bloques para una transacción
 */
export const getTransactionUrl = (txHash) => {
  const config = getNetworkConfig();
  return `${config.explorerUrl}/tx/${txHash}`;
};

/**
 * Obtiene la URL del explorador de bloques para una dirección
 */
export const getAddressUrl = (address) => {
  const config = getNetworkConfig();
  return `${config.explorerUrl}/contract/${address}`;
};
