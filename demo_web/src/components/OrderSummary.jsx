import React from 'react';
import { Lock } from 'lucide-react';

function OrderSummary({ course, total }) {
  const discountAmount = course.originalPrice * course.discount;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
      <h2 className="text-xl font-bold mb-6">Resumen del pedido</h2>

      {/* Precios */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Precio original:</span>
          <span className="font-semibold">{course.originalPrice.toFixed(2)} {course.currency}/</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Descuentos ({(course.discount * 100).toFixed(0)}% de descuento):</span>
          <span className="font-semibold">-{discountAmount.toFixed(2)} S/</span>
        </div>
      </div>

      {/* Total */}
      <div className="border-t pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">Total (1 curso):</span>
          <span className="text-2xl font-bold">{total.toFixed(2)} {course.currency}/</span>
        </div>
      </div>

      {/* Botón de pago */}
      <button className="w-full bg-udemy-purple hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-colors mb-4 flex items-center justify-center gap-2">
        <Lock className="w-5 h-5" />
        Pagar S/{total.toFixed(2)}
      </button>

      {/* Términos */}
      <p className="text-xs text-gray-600 text-center mb-6">
        Al completar su compra, usted acepta todos los{' '}
        <a href="#" className="text-udemy-purple hover:underline">Términos de uso</a>
      </p>

      {/* Garantía */}
      <div className="border-t pt-6">
        <h3 className="font-bold text-center mb-2">Garantía de devolución de dinero de 30 días</h3>
        <p className="text-sm text-gray-600 text-center">
          ¿No estás satisfecho? Recibe un reembolso completo en 30 días. ¡Sencillo y directo!
        </p>
      </div>

      {/* Detalles del curso */}
      <div className="border-t mt-6 pt-6">
        <h3 className="font-semibold mb-4">Detalles del pedido (1 curso)</h3>
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
            <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-sm leading-tight mb-1">{course.title}</h4>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">{course.originalPrice.toFixed(2)} {course.currency}/</span>
              <span className="font-semibold">{total.toFixed(2)} {course.currency}/</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
