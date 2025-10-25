import React from 'react';

function WalletButton({ wallet, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 p-4 border border-gray-300 rounded-lg hover:border-noudemy-purple hover:bg-purple-50 transition-all"
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
  );
}

export default WalletButton;
