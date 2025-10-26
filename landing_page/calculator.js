// Savings Calculator

function calculateFees(amount) {
    // Stripe/PayPal fees
    const stripeFee = (amount * 0.029) + 0.30;
    const paypalFee = (amount * 0.03) + 0.49;
    
    // TrustPay (Starknet) - fixed fee
    const trustpayFee = 0.05; // Average between $0.01 and $0.10
    
    return {
        stripe: stripeFee,
        paypal: paypalFee,
        trustpay: trustpayFee,
        stripeSavings: stripeFee - trustpayFee,
        paypalSavings: paypalFee - trustpayFee
    };
}

function updateCalculator() {
    const amount = parseFloat(document.getElementById('amount').value) || 100;
    const fees = calculateFees(amount);
    
    const resultContainer = document.getElementById('savings-result');
    
    resultContainer.innerHTML = `
        <div class="bg-white rounded-lg p-6 border-2 border-red-200">
            <div class="text-center">
                <div class="flex items-center justify-center gap-2 mb-2">
                    <i class="fab fa-stripe text-2xl text-blue-600"></i>
                    <span class="text-sm font-medium text-gray-600">Stripe</span>
                </div>
                <p class="text-3xl font-bold text-red-600 mb-1">$${fees.stripe.toFixed(2)}</p>
                <p class="text-xs text-gray-500">Pierdes en tarifas</p>
            </div>
        </div>

        <div class="bg-white rounded-lg p-6 border-2 border-red-200">
            <div class="text-center">
                <div class="flex items-center justify-center gap-2 mb-2">
                    <i class="fab fa-paypal text-2xl text-blue-700"></i>
                    <span class="text-sm font-medium text-gray-600">PayPal</span>
                </div>
                <p class="text-3xl font-bold text-red-600 mb-1">$${fees.paypal.toFixed(2)}</p>
                <p class="text-xs text-gray-500">Pierdes en tarifas</p>
            </div>
        </div>

        <div class="bg-white rounded-lg p-6 border-2 border-green-200 bg-green-50">
            <div class="text-center">
                <div class="flex items-center justify-center gap-2 mb-2">
                    <div class="w-6 h-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <i class="fas fa-bolt text-white text-xs"></i>
                    </div>
                    <span class="text-sm font-medium text-gray-600">TrustPay</span>
                </div>
                <p class="text-3xl font-bold text-green-600 mb-1">$${fees.trustpay.toFixed(2)}</p>
                <p class="text-xs text-gray-500">Tarifa de red</p>
            </div>
        </div>
    `;

    // Add savings summary
    const avgSavings = (fees.stripeSavings + fees.paypalSavings) / 2;
    const savingsPercent = ((avgSavings / ((fees.stripe + fees.paypal) / 2)) * 100).toFixed(1);
    
    resultContainer.innerHTML += `
        <div class="md:col-span-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-200 mt-4">
            <div class="text-center">
                <p class="text-sm text-gray-600 mb-2">🎉 Ahorro promedio con TrustPay</p>
                <p class="text-4xl font-bold text-orange-600 mb-2">$${avgSavings.toFixed(2)}</p>
                <p class="text-lg font-semibold text-gray-700">${savingsPercent}% de reducción</p>
                <p class="text-xs text-gray-500 mt-2">Por cada transacción de $${amount.toFixed(2)}</p>
            </div>
        </div>
    `;
}

// Initialize calculator
document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.getElementById('amount');
    if (amountInput) {
        amountInput.addEventListener('input', updateCalculator);
        updateCalculator(); // Initial calculation
    }
});
