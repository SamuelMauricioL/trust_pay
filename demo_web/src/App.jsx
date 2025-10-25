import React, { useState } from 'react';
import Header from './components/Header';
import CheckoutForm from './components/CheckoutForm';
import OrderSummary from './components/OrderSummary';

function App() {
  const [paymentMethod, setPaymentMethod] = useState('wallet');
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const courseData = {
    title: 'Curso intensivo para desarrolladores de blockchain de Ethereum con Solidity (2025)',
    originalPrice: 39.90,
    discount: 0.25,
    currency: 'soles',
    image: '/course-thumb.jpg'
  };

  const calculateTotal = () => {
    const discountAmount = courseData.originalPrice * courseData.discount;
    return courseData.originalPrice - discountAmount;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario de checkout - 2 columnas */}
          <div className="lg:col-span-2">
            <CheckoutForm 
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              walletConnected={walletConnected}
              setWalletConnected={setWalletConnected}
              walletAddress={walletAddress}
              setWalletAddress={setWalletAddress}
            />
          </div>

          {/* Resumen del pedido - 1 columna */}
          <div className="lg:col-span-1">
            <OrderSummary 
              course={courseData}
              total={calculateTotal()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
