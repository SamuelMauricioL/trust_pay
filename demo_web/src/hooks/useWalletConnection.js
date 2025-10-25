import { useState } from 'react';

export const useWalletConnection = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [starknetInstance, setStarknetInstance] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [error, setError] = useState(null);

  // Detectar wallets disponibles
  const detectWallets = () => {
    const wallets = [];
    const detectedIds = new Set();

    // Braavo wallet
    if (window.starknet_braavos) {
      wallets.push({
        id: 'braavos',
        name: 'Braavo',
        icon: 'https://raw.githubusercontent.com/myBraavos/braavos-assets/main/logo.svg',
        instance: window.starknet_braavos
      });
      detectedIds.add('braavos');
    }

    // Wallet por defecto (window.starknet)
    if (window.starknet) {
      const walletId = window.starknet.id || 'default';

      // Solo agregar si no es una de las que ya detectamos
      if (!detectedIds.has(walletId)) {
        wallets.push({
          id: walletId,
          name: window.starknet.name || 'Starknet Wallet',
          icon: window.starknet.icon || 'https://play-lh.googleusercontent.com/HUk0fYbBtiJUFO1H_GCYq4p6kPxifsRP5vqHG96ZeK38-hepdPUU0GMprslWvItn3WUj',
          instance: window.starknet
        });
      }
    }

    return wallets;
  };

  // Conectar con wallet específica
  const connectWallet = async (wallet) => {
    setIsConnecting(true);
    setError(null);

    try {
      const starknet = wallet.instance;

      console.log('Conectando con:', wallet.name, starknet);

      // Solicitar conexión al usuario
      const enableResult = await starknet.enable();

      console.log('Resultado de enable:', enableResult);
      console.log('isConnected:', starknet.isConnected);
      console.log('selectedAddress:', starknet.selectedAddress);

      // Verificar si se conectó
      if (starknet.isConnected) {
        const address = starknet.selectedAddress || starknet.account?.address || enableResult?.[0];
        setStarknetInstance(starknet);
        setWalletConnected(true);
        setWalletAddress(address);
      } else {
        setError('No se pudo conectar la wallet. Intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error conectando wallet:', error);
      setError(error.message || 'Error al conectar. El usuario canceló o hubo un problema.');
    } finally {
      setIsConnecting(false);
    }
  };

  // Desconectar wallet
  const disconnectWallet = () => {
    setStarknetInstance(null);
    setWalletConnected(false);
    setWalletAddress('');
    setError(null);
  };

  // Formatear dirección
  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return {
    isConnecting,
    walletConnected,
    walletAddress,
    error,
    starknetInstance,
    detectWallets,
    connectWallet,
    disconnectWallet,
    formatAddress
  };
};
