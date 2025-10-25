import React, { useState } from 'react';
import Header from './Header';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';

function CheckoutPage() {
    const [paymentMethod, setPaymentMethod] = useState('wallet');

    const courseData = {
        title: 'Blockchain AZ: Construye una Blockchain, una Criptomoneda + Premio ChatGPT',
        originalPrice: 2.00,
        discount: 0.25,
        currency: 'USD',
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
                            totalAmount={calculateTotal()}
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

export default CheckoutPage;