import React from 'react';
import { Wallet, Loader2, CreditCard } from 'lucide-react';

function WalletConnectionSection({
  isConnecting,
  walletConnected,
  walletAddress,
  error,
  onConnect,
  onDisconnect,
  formatAddress,
  onPay,
  isProcessing,
  txHash,
  txError,
  amount
}) {
  if (walletConnected) {
    return (
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
                onDisconnect();
              }}
              className="text-xs text-red-600 hover:text-red-700 font-medium"
            >
              Desconectar
            </button>
          </div>
        </div>

        {!txHash && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPay && onPay();
              }}
              disabled={isProcessing}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Procesando pago...</span>
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" />
                  <span>Pagar S/. {amount?.toFixed(2) || '0.00'}</span>
                </>
              )}
            </button>
            
            {txError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                {txError}
              </div>
            )}
          </>
        )}

        {txHash && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm font-semibold text-blue-900 mb-2">✓ Pago enviado exitosamente</p>
            <p className="text-xs text-blue-700 mb-1">Hash de transacción:</p>
            <p className="font-mono text-xs text-blue-600 break-all">{txHash}</p>
            <a
              href={`https://starkscan.co/tx/${txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:text-blue-800 underline mt-2 inline-block"
            >
              Ver en StarkScan →
            </a>
          </div>
        )}

        {!txHash && (
          <div className="text-xs text-gray-500">
            <p>✓ Wallet lista para realizar el pago</p>
            <p className="mt-1">Se te solicitará confirmar la transacción en tu wallet.</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onConnect();
        }}
        disabled={isConnecting}
        className="w-full bg-noudemy-purple hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
  );
}

export default WalletConnectionSection;
