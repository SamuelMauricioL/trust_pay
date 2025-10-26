import { useState } from 'react';
import { getNetworkConfig, getTransactionUrl } from '../config/starknet.config';

export const useStarknetTransaction = (walletInstance) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [txHash, setTxHash] = useState(null);
  const [error, setError] = useState(null);

  // Obtener configuración de red (mainnet o testnet)
  const networkConfig = getNetworkConfig();
  const ETH_TOKEN_ADDRESS = networkConfig.ethTokenAddress;
  const PAYMENT_RECIPIENT = networkConfig.paymentRecipient;
  const ethPriceUSD = networkConfig.ethPriceUSD;

  /**
   * Envía una transacción de pago
   * @param {number} amount - Monto en soles
   * @param {string} tokenAddress - Dirección del token a usar
   */
  const sendPayment = async (amount, tokenAddress = ETH_TOKEN_ADDRESS) => {
    if (!walletInstance || !walletInstance.account) {
      setError('Wallet no conectada');
      return { success: false, error: 'Wallet no conectada' };
    }

    setIsProcessing(true);
    setError(null);
    setTxHash(null);

    try {
      // Convertir el monto de USD a ETH
      // IMPORTANTE: En producción, usa un oracle de precios en tiempo real (ej: Pragma, Chainlink)
      const amountInEth = amount / ethPriceUSD;
      const amountInWei = (amountInEth * 1e18).toString();

      const logPrefix = networkConfig.isMainnet ? '⚠️ MAINNET (FONDOS REALES)' : '🧪 TESTNET';
      console.log(`${logPrefix} - Preparando pago:`, {
        amountInUSD: amount,
        amountInEth,
        amountInWei,
        recipient: PAYMENT_RECIPIENT,
        token: tokenAddress,
        network: networkConfig.name,
        ethPrice: ethPriceUSD
      });

      // Llamar al contrato del token para transferir
      const transferCall = {
        contractAddress: tokenAddress,
        entrypoint: 'transfer',
        calldata: [
          PAYMENT_RECIPIENT, // recipient
          amountInWei,        // amount low
          '0'                 // amount high (para uint256)
        ]
      };

      if (networkConfig.isMainnet) {
        console.warn('⚠️ ¡ATENCIÓN! Ejecutando transacción en MAINNET con fondos REALES');
      }
      console.log('Ejecutando transacción...');

      // Ejecutar la transacción
      const result = await walletInstance.account.execute(transferCall);
      
      console.log('Transacción enviada:', result);
      console.log('Ver en explorador:', getTransactionUrl(result.transaction_hash));
      
      setTxHash(result.transaction_hash);
      setIsProcessing(false);

      return {
        success: true,
        txHash: result.transaction_hash
      };

    } catch (err) {
      console.error('Error en transacción:', err);
      setError(err.message || 'Error al procesar el pago');
      setIsProcessing(false);
      
      return {
        success: false,
        error: err.message || 'Error al procesar el pago'
      };
    }
  };

  /**
   * Verifica el estado de una transacción
   * @param {string} transactionHash - Hash de la transacción
   */
  const checkTransactionStatus = async (transactionHash) => {
    if (!walletInstance?.provider) {
      return null;
    }

    try {
      const receipt = await walletInstance.provider.getTransactionReceipt(transactionHash);
      return receipt;
    } catch (err) {
      console.error('Error verificando transacción:', err);
      return null;
    }
  };

  /**
   * Obtiene el balance de un token
   * @param {string} tokenAddress - Dirección del token
   */
  const getTokenBalance = async (tokenAddress = ETH_TOKEN_ADDRESS) => {
    if (!walletInstance?.account) {
      return '0';
    }

    try {
      const result = await walletInstance.account.callContract({
        contractAddress: tokenAddress,
        entrypoint: 'balanceOf',
        calldata: [walletInstance.account.address]
      });

      // Convertir de wei a ETH
      const balanceInWei = BigInt(result.result[0]);
      const balanceInEth = Number(balanceInWei) / 1e18;

      return balanceInEth.toFixed(6);
    } catch (err) {
      console.error('Error obteniendo balance:', err);
      return '0';
    }
  };

  return {
    sendPayment,
    checkTransactionStatus,
    getTokenBalance,
    isProcessing,
    txHash,
    error
  };
};
