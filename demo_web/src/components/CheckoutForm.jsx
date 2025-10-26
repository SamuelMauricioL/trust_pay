import React, { useState } from 'react';
import { Check, CreditCard, Smartphone, Wallet as WalletIcon } from 'lucide-react';
import { useWalletConnection } from '../hooks/useWalletConnection';
import { useStarknetTransaction } from '../hooks/useStarknetTransaction';
import WalletModal from './wallet/WalletModal';
import WalletConnectionSection from './wallet/WalletConnectionSection';
import PaymentMethodCard from './checkout/PaymentMethodCard';
import NetworkWarning from './NetworkWarning';

function CheckoutForm({ paymentMethod, setPaymentMethod, totalAmount }) {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [availableWallets, setAvailableWallets] = useState([]);

  const {
    isConnecting,
    walletConnected,
    walletAddress,
    error,
    starknetInstance,
    detectWallets,
    connectWallet,
    disconnectWallet,
    formatAddress
  } = useWalletConnection();

  const {
    sendPayment,
    getTokenBalance,
    isProcessing,
    txHash,
    error: txError
  } = useStarknetTransaction(starknetInstance);

  // Abrir modal de selección de wallet
  const handleOpenWalletModal = () => {
    const wallets = detectWallets();

    if (wallets.length === 0) {
      return;
    }

    setAvailableWallets(wallets);
    setShowWalletModal(true);
  };

  // Conectar con wallet específica
  const handleConnectWallet = async (wallet) => {
    setShowWalletModal(false);
    await connectWallet(wallet);
  };

  // Manejar pago
  const handlePayment = async () => {
    if (!totalAmount || totalAmount <= 0) {
      alert('Monto inválido');
      return;
    }

    const result = await sendPayment(totalAmount);

    if (result.success) {
      console.log('Pago exitoso:', result.txHash);
    } else {
      console.error('Error en pago:', result.error);
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-3xl font-bold mb-8">Verificar</h1>
      
      {/* Advertencia de red */}
      <NetworkWarning />

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
            NoUdemy está obligado por ley a recaudar los impuestos de transacción aplicables sobre las compras realizadas en determinadas jurisdicciones fiscales.
          </p>
        </div>

        {/* Métodos de pago */}
        <div className="space-y-3">
          {/* Conectar a wallet */}
          <PaymentMethodCard
            id="wallet"
            isSelected={paymentMethod === 'wallet'}
            onSelect={setPaymentMethod}
            icon={
              <div className="flex gap-1">
                <img
                  src="https://play-lh.googleusercontent.com/P-xt-cfYUtwVQ3YsNb5yd5_6MzCHmcKAbRkt-up8Ga44x_OCGLy4WFxsGhxfJaSLEw=w480-h960-rw"
                  alt="Ready Wallet"
                  className="w-6 h-6"
                />
                <img
                  src="https://play-lh.googleusercontent.com/HUk0fYbBtiJUFO1H_GCYq4p6kPxifsRP5vqHG96ZeK38-hepdPUU0GMprslWvItn3WUj"
                  alt="Braavos Wallet"
                  className="w-6 h-6 rounded-full"
                />
              </div>
            }
            title="Conectar a wallet"
            statusBadge={
              walletConnected && (
                <span className="text-xs text-green-600 font-medium">
                  ✓ Conectada
                </span>
              )
            }
          >
            <WalletConnectionSection
              isConnecting={isConnecting}
              walletConnected={walletConnected}
              walletAddress={walletAddress}
              error={error}
              onConnect={handleOpenWalletModal}
              onDisconnect={disconnectWallet}
              formatAddress={formatAddress}
              onPay={handlePayment}
              isProcessing={isProcessing}
              txHash={txHash}
              txError={txError}
              amount={totalAmount}
            />
          </PaymentMethodCard>

          {/* Tarjeta */}
          <PaymentMethodCard
            id="card"
            isSelected={paymentMethod === 'card'}
            onSelect={setPaymentMethod}
            icon={<CreditCard className="w-5 h-5" />}
            title="Visa **** 7210"
            statusBadge={
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          </PaymentMethodCard>

          {/* Tarjetas */}
          <PaymentMethodCard
            id="cards"
            isSelected={paymentMethod === 'cards'}
            onSelect={setPaymentMethod}
            icon={<CreditCard className="w-5 h-5" />}
            title="TARJETAS"
            statusBadge={
              <div className="flex gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-6" />
              </div>
            }
          />

          {/* Apple Pay */}
          <PaymentMethodCard
            id="apple"
            isSelected={paymentMethod === 'apple'}
            onSelect={setPaymentMethod}
            icon={<Smartphone className="w-5 h-5" />}
            title="Apple Pay"
          />

          {/* Google Pay */}
          <PaymentMethodCard
            id="google"
            isSelected={paymentMethod === 'google'}
            onSelect={setPaymentMethod}
            icon={<WalletIcon className="w-5 h-5" />}
            title="Google Pay"
          />

          {/* PayPal */}
          <PaymentMethodCard
            id="paypal"
            isSelected={paymentMethod === 'paypal'}
            onSelect={setPaymentMethod}
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#003087">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .76-.653h8.53c2.49 0 4.227.514 5.16 1.527.878.952 1.206 2.34.974 4.123-.3 2.315-1.194 4.004-2.658 5.02-1.266.88-3.043 1.327-5.287 1.327H9.93a.77.77 0 0 0-.76.653l-.85 5.223a.641.641 0 0 1-.633.654l-.61-.037zm6.89-13.74a.39.39 0 0 0-.387-.33h-2.024a.39.39 0 0 0-.387.333l-.58 3.564a.39.39 0 0 0 .387.446h1.394c1.398 0 2.325-.28 2.831-.855.444-.505.644-1.235.594-2.168-.037-.685-.25-1.185-.636-1.487-.33-.26-.795-.39-1.383-.39l-.01-.003z" />
              </svg>
            }
            title="PayPal"
          />
        </div>
      </div>

      {/* Modal de selección de wallet */}
      <WalletModal
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        wallets={availableWallets}
        onSelectWallet={handleConnectWallet}
      />
    </div>
  );
}

export default CheckoutForm;
