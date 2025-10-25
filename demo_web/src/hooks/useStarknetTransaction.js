import { useState } from 'react';

export const useStarknetTransaction = (walletInstance) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [txHash, setTxHash] = useState(null);
  const [error, setError] = useState(null);

  // Dirección del contrato del token (ETH en Starknet)
  const ETH_TOKEN_ADDRESS = '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7';
  
  // Dirección donde se reciben los pagos (merchant/vendedor)
  // Ready Wallet - Dirección que recibe los pagos
  const PAYMENT_RECIPIENT = '0x01793c5c078B9C54d74f0dF5e8679dE82b2dc683a758aB20BAf59b8448488b60';

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
      // Convertir el monto de soles a wei (asumiendo 1 ETH = cierto valor en soles)
      // Por ahora usaremos un valor de ejemplo - necesitarás un oracle de precios real
      const ethPriceInSoles = 10000; // Ejemplo: 1 ETH = 10000 soles
      const amountInEth = amount / ethPriceInSoles;
      const amountInWei = (amountInEth * 1e18).toString();

      console.log('Preparando pago:', {
        amountInSoles: amount,
        amountInEth,
        amountInWei,
        recipient: PAYMENT_RECIPIENT,
        token: tokenAddress
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

      console.log('Ejecutando transacción...');

      // Ejecutar la transacción
      const result = await walletInstance.account.execute(transferCall);
      
      console.log('Transacción enviada:', result);
      
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
