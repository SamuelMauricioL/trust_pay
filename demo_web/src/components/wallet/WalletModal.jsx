import React from 'react';
import WalletButton from './WalletButton';

function WalletModal({ isOpen, onClose, wallets, onSelectWallet }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Selecciona tu Wallet</h3>
          <button
            onClick={onClose}
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
          {wallets.map((wallet) => (
            <WalletButton
              key={wallet.id}
              wallet={wallet}
              onClick={() => onSelectWallet(wallet)}
            />
          ))}
        </div>

        {wallets.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No se detectaron wallets instaladas</p>
            <p className="text-sm mt-2">Instala Braavo o Argent X</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WalletModal;
