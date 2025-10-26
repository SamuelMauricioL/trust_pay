import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import { getNetworkConfig } from '../config/starknet.config';

function NetworkWarning() {
  const networkConfig = getNetworkConfig();

  if (!networkConfig.isMainnet) {
    // Testnet - mensaje informativo
    return (
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-blue-900">
              Modo de Prueba - {networkConfig.name}
            </p>
            <p className="text-xs text-blue-700 mt-1">
              Estás usando criptomonedas de prueba. No se utilizarán fondos reales.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Mainnet - advertencia importante
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm font-bold text-red-900">
            ⚠️ MAINNET - Usando Fondos Reales
          </p>
          <p className="text-xs text-red-700 mt-1">
            Estás conectado a <strong>{networkConfig.name}</strong>. Las transacciones utilizarán
            criptomonedas REALES y pagarás gas fees reales. Verifica todos los detalles antes de confirmar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NetworkWarning;
