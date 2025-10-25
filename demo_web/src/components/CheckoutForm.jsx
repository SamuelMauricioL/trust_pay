import React, { useState, useEffect } from 'react';
import { Check, CreditCard, Smartphone, Wallet, Loader2 } from 'lucide-react';

function CheckoutForm({
  paymentMethod,
  setPaymentMethod,
  walletConnected,
  setWalletConnected,
  walletAddress,
  setWalletAddress
}) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [starknetInstance, setStarknetInstance] = useState(null);
  const [error, setError] = useState(null);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [availableWallets, setAvailableWallets] = useState([]);

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

  // Abrir modal de selección de wallet
  const handleOpenWalletModal = () => {
    const wallets = detectWallets();

    if (wallets.length === 0) {
      setError('No se detectó ninguna wallet Starknet. Instala Braavo o Argent X y recarga la página.');
      return;
    }

    setAvailableWallets(wallets);
    setShowWalletModal(true);
  };

  // Conectar con wallet específica
  const connectWithWallet = async (wallet) => {
    setIsConnecting(true);
    setError(null);
    setShowWalletModal(false);

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
  const handleDisconnectWallet = () => {
    // Limpiar el estado local (get-starknet no tiene método disconnect)
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
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-3xl font-bold mb-8">Verificar</h1>

      {/* Detalles de la cuenta */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-semibold">1. Detalles de la cuenta</span>
          <span className="text-sm text-gray-600">ssamuelmauricio@gmail.com</span>
          <Check className="w-5 h-5 text-green-600" />
        </div>
      </div>

      {/* Dirección de facturación */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-semibold">2. Dirección de facturación y forma de pago</span>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* País */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">País</label>
          <div className="relative">
            <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-udemy-purple focus:border-transparent appearance-none bg-white">
              <option>Perú</option>
              <option>Chile</option>
              <option>Colombia</option>
              <option>México</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Udemy está obligado por ley a recaudar los impuestos de transacción aplicables sobre las compras realizadas en determinadas jurisdicciones fiscales.
          </p>
        </div>

        {/* Métodos de pago */}
        <div className="space-y-3">
          {/* Conectar a wallet */}
          <div
            className={`border rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === 'wallet' ? 'border-black bg-gray-50' : 'border-gray-300'
              }`}
            onClick={() => setPaymentMethod('wallet')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={paymentMethod === 'wallet'}
                  onChange={() => setPaymentMethod('wallet')}
                  className="w-4 h-4"
                />
                <img
                  src="https://play-lh.googleusercontent.com/HUk0fYbBtiJUFO1H_GCYq4p6kPxifsRP5vqHG96ZeK38-hepdPUU0GMprslWvItn3WUj"
                  alt="Wallet"
                  className="w-6 h-6"
                />
                <span className="font-medium">Conectar a wallet</span>
              </div>
              {walletConnected && (
                <span className="text-xs text-green-600 font-medium">
                  ✓ Conectada
                </span>
              )}
            </div>

            {paymentMethod === 'wallet' && (
              <div className="mt-4 space-y-3">
                {!walletConnected ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenWalletModal();
                      }}
                      disabled={isConnecting}
                      className="w-full bg-udemy-purple hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isConnecting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Conectando...</span>
                        </>
                      ) : (
                        <>
                          <Wallet className="w-5 h-5" />
                          <span>Seleccionar Wallet</span>
                        </>
                      )}
                    </button>
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                        {error}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Dirección de wallet</p>
                          <p className="font-mono text-sm font-semibold text-gray-900">
                            {formatAddress(walletAddress)}
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDisconnectWallet();
                          }}
                          className="text-xs text-red-600 hover:text-red-700 font-medium"
                        >
                          Desconectar
                        </button>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      <p>✓ Wallet lista para realizar el pago</p>
                      <p className="mt-1">Se te solicitará confirmar la transacción en tu wallet.</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Tarjeta */}
          <div
            className={`border rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-black bg-gray-50' : 'border-gray-300'
              }`}
            onClick={() => setPaymentMethod('card')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="w-4 h-4"
                />
                <CreditCard className="w-5 h-5" />
                <span className="font-medium">Visa **** 7210</span>
              </div>
              <div className="flex gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
              </div>
            </div>

            {paymentMethod === 'card' && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Nombre en la tarjeta</label>
                  <input
                    type="text"
                    defaultValue="Samuel Aimar Mauricio Laime"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-udemy-purple"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Número de tarjeta</label>
                  <input
                    type="text"
                    defaultValue="**** 7210"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-udemy-purple"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Fecha de expiración</label>
                  <input
                    type="text"
                    defaultValue="5/2026"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-udemy-purple"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Tarjetas */}
          <div
            className={`border rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === 'cards' ? 'border-black bg-gray-50' : 'border-gray-300'
              }`}
            onClick={() => setPaymentMethod('cards')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={paymentMethod === 'cards'}
                  onChange={() => setPaymentMethod('cards')}
                  className="w-4 h-4"
                />
                <CreditCard className="w-5 h-5" />
                <span className="font-medium">TARJETAS</span>
              </div>
              <div className="flex gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-6" />
              </div>
            </div>
          </div>

          {/* Apple Pay */}
          <div
            className={`border rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === 'apple' ? 'border-black bg-gray-50' : 'border-gray-300'
              }`}
            onClick={() => setPaymentMethod('apple')}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                checked={paymentMethod === 'apple'}
                onChange={() => setPaymentMethod('apple')}
                className="w-4 h-4"
              />
              <Smartphone className="w-5 h-5" />
              <span className="font-medium">Apple Pay</span>
            </div>
          </div>

          {/* Google Pay */}
          <div
            className={`border rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === 'google' ? 'border-black bg-gray-50' : 'border-gray-300'
              }`}
            onClick={() => setPaymentMethod('google')}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                checked={paymentMethod === 'google'}
                onChange={() => setPaymentMethod('google')}
                className="w-4 h-4"
              />
              <Wallet className="w-5 h-5" />
              <span className="font-medium">Google Pay</span>
            </div>
          </div>

          {/* PayPal */}
          <div
            className={`border rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === 'paypal' ? 'border-black bg-gray-50' : 'border-gray-300'
              }`}
            onClick={() => setPaymentMethod('paypal')}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                checked={paymentMethod === 'paypal'}
                onChange={() => setPaymentMethod('paypal')}
                className="w-4 h-4"
              />
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#003087">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .76-.653h8.53c2.49 0 4.227.514 5.16 1.527.878.952 1.206 2.34.974 4.123-.3 2.315-1.194 4.004-2.658 5.02-1.266.88-3.043 1.327-5.287 1.327H9.93a.77.77 0 0 0-.76.653l-.85 5.223a.641.641 0 0 1-.633.654l-.61-.037zm6.89-13.74a.39.39 0 0 0-.387-.33h-2.024a.39.39 0 0 0-.387.333l-.58 3.564a.39.39 0 0 0 .387.446h1.394c1.398 0 2.325-.28 2.831-.855.444-.505.644-1.235.594-2.168-.037-.685-.25-1.185-.636-1.487-.33-.26-.795-.39-1.383-.39l-.01-.003z" />
              </svg>
              <span className="font-medium">PayPal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de selección de wallet */}
      {showWalletModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowWalletModal(false)}>
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Selecciona tu Wallet</h3>
              <button
                onClick={() => setShowWalletModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Elige la wallet con la que deseas conectarte
            </p>

            <div className="space-y-3">
              {availableWallets.map((wallet) => (
                <button
                  key={wallet.id}
                  onClick={() => connectWithWallet(wallet)}
                  className="w-full flex items-center gap-4 p-4 border border-gray-300 rounded-lg hover:border-udemy-purple hover:bg-purple-50 transition-all"
                >
                  <img
                    src={wallet.icon}
                    alt={wallet.name}
                    className="w-10 h-10 rounded-lg"
                    onError={(e) => {
                      e.target.src = 'https://play-lh.googleusercontent.com/HUk0fYbBtiJUFO1H_GCYq4p6kPxifsRP5vqHG96ZeK38-hepdPUU0GMprslWvItn3WUj';
                    }}
                  />
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-gray-900">{wallet.name}</p>
                    <p className="text-xs text-gray-500">Wallet Starknet</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>

            {availableWallets.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <p>No se detectaron wallets instaladas</p>
                <p className="text-sm mt-2">Instala Braavo o Argent X</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutForm;
