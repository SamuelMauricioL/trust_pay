import React from 'react';

function PaymentMethodCard({
  id,
  isSelected,
  onSelect,
  icon,
  title,
  statusBadge,
  children
}) {
  return (
    <div
      className={`border rounded-lg p-4 cursor-pointer transition-all ${
        isSelected ? 'border-black bg-gray-50' : 'border-gray-300'
      }`}
      onClick={() => onSelect(id)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <input
            type="radio"
            checked={isSelected}
            onChange={() => onSelect(id)}
            className="w-4 h-4"
          />
          {icon}
          <span className="font-medium">{title}</span>
        </div>
        {statusBadge}
      </div>

      {isSelected && children && (
        <div className="mt-4 space-y-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default PaymentMethodCard;
