// Savings Calculator with Personality

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

// Animate number counter
function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    const difference = end - start;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (difference * easeOut);
        
        element.textContent = '$' + current.toFixed(2);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Get savings message based on amount
function getSavingsMessage(savings) {
    if (savings > 100) return { emoji: '🤑', text: '¡Increíble ahorro!' };
    if (savings > 50) return { emoji: '💰', text: '¡Gran ahorro!' };
    if (savings > 10) return { emoji: '🎉', text: '¡Buen ahorro!' };
    return { emoji: '✨', text: 'Ahorro garantizado' };
}

// Get example use case based on amount
function getUseCaseExample(amount) {
    if (amount >= 10000) return 'Consultoría empresarial';
    if (amount >= 5000) return 'Proyecto de desarrollo';
    if (amount >= 1000) return 'Curso profesional';
    if (amount >= 500) return 'Servicio freelance';
    if (amount >= 100) return 'Producto digital';
    return 'Servicio básico';
}

function updateCalculator() {
    const amount = parseFloat(document.getElementById('amount').value) || 100;
    const fees = calculateFees(amount);
    
    const resultContainer = document.getElementById('savings-result');
    
    // Calculate percentages for visual bars
    const maxFee = Math.max(fees.stripe, fees.paypal);
    const stripePercent = (fees.stripe / maxFee) * 100;
    const paypalPercent = (fees.paypal / maxFee) * 100;
    const trustpayPercent = (fees.trustpay / maxFee) * 100;
    
    const avgSavings = (fees.stripeSavings + fees.paypalSavings) / 2;
    const savingsPercent = ((avgSavings / ((fees.stripe + fees.paypal) / 2)) * 100).toFixed(1);
    const savingsMsg = getSavingsMessage(avgSavings);
    const useCase = getUseCaseExample(amount);
    
    resultContainer.innerHTML = `
        <!-- Comparison Cards -->
        <div class="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <!-- Stripe Card -->
            <div class="group relative bg-white rounded-xl p-5 border-2 border-red-200 hover:border-red-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div class="absolute top-0 right-0 text-6xl opacity-5">😱</div>
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <i class="fab fa-stripe text-2xl text-blue-600"></i>
                        <span class="text-sm font-bold text-gray-700">Stripe</span>
                    </div>
                    <span class="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">Costoso</span>
                </div>
                
                <div class="mb-3">
                    <p class="text-3xl font-bold text-red-600 mb-1 animate-pulse">$${fees.stripe.toFixed(2)}</p>
                    <p class="text-xs text-gray-500">2.9% + $0.30</p>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div class="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-1000" style="width: ${stripePercent}%"></div>
                </div>
                <p class="text-xs text-red-600 font-medium">Pierdes en comisiones</p>
            </div>

            <!-- PayPal Card -->
            <div class="group relative bg-white rounded-xl p-5 border-2 border-red-200 hover:border-red-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div class="absolute top-0 right-0 text-6xl opacity-5">😓</div>
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <i class="fab fa-paypal text-2xl text-blue-700"></i>
                        <span class="text-sm font-bold text-gray-700">PayPal</span>
                    </div>
                    <span class="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">Muy caro</span>
                </div>
                
                <div class="mb-3">
                    <p class="text-3xl font-bold text-red-600 mb-1 animate-pulse">$${fees.paypal.toFixed(2)}</p>
                    <p class="text-xs text-gray-500">3.0% + $0.49</p>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div class="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-1000" style="width: ${paypalPercent}%"></div>
                </div>
                <p class="text-xs text-red-600 font-medium">Pierdes en comisiones</p>
            </div>

            <!-- TrustPay Card -->
            <div class="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-300 hover:border-green-400 transition-all duration-300 hover:shadow-2xl overflow-hidden transform hover:scale-105">
                <div class="absolute top-0 right-0 text-6xl opacity-10">🚀</div>
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <div class="w-7 h-7 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                            <i class="fas fa-bolt text-white text-sm"></i>
                        </div>
                        <span class="text-sm font-bold text-gray-700">TrustPay</span>
                    </div>
                    <span class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">Mejor precio</span>
                </div>
                
                <div class="mb-3">
                    <p class="text-3xl font-bold text-green-600 mb-1">$${fees.trustpay.toFixed(2)}</p>
                    <p class="text-xs text-gray-600">Tarifa fija de red</p>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div class="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000" style="width: ${trustpayPercent}%"></div>
                </div>
                <p class="text-xs text-green-600 font-bold">Máximo ahorro 🎯</p>
            </div>
        </div>

        <!-- Big Savings Banner -->
        <div class="md:col-span-3 relative overflow-hidden">
            <div class="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-2xl p-8 text-center relative">
                <!-- Animated background -->
                <div class="absolute inset-0 bg-gradient-to-r from-yellow-300/50 via-orange-300/50 to-pink-300/50 animate-pulse"></div>
                
                <div class="relative z-10">
                    <div class="text-6xl mb-3 animate-bounce">${savingsMsg.emoji}</div>
                    <p class="text-white text-lg font-bold mb-2">${savingsMsg.text}</p>
                    <div class="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-4 border border-white/30">
                        <p class="text-white/90 text-sm font-medium mb-2">Tu ahorro por transacción</p>
                        <p class="text-6xl font-black text-white mb-2 drop-shadow-lg">$${avgSavings.toFixed(2)}</p>
                        <div class="flex items-center justify-center gap-3 text-white/90">
                            <span class="text-2xl font-bold">${savingsPercent}%</span>
                            <span class="text-sm">de reducción</span>
                        </div>
                    </div>
                    
                    <!-- Example calculation -->
                    <div class="bg-white/90 rounded-lg p-4 max-w-md mx-auto">
                        <p class="text-sm text-gray-700 mb-2">💡 <strong>Ejemplo:</strong> ${useCase}</p>
                        <div class="grid grid-cols-3 gap-2 text-xs">
                            <div class="bg-red-100 rounded p-2">
                                <p class="text-gray-600">Con Stripe</p>
                                <p class="font-bold text-red-600">${(amount - fees.stripe).toFixed(2)}</p>
                            </div>
                            <div class="bg-red-100 rounded p-2">
                                <p class="text-gray-600">Con PayPal</p>
                                <p class="font-bold text-red-600">${(amount - fees.paypal).toFixed(2)}</p>
                            </div>
                            <div class="bg-green-100 rounded p-2">
                                <p class="text-gray-600">Con TrustPay</p>
                                <p class="font-bold text-green-600">${(amount - fees.trustpay).toFixed(2)}</p>
                            </div>
                        </div>
                        <p class="text-xs text-gray-500 mt-2">Dinero que recibes después de tarifas</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Stats Row -->
        <div class="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div class="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div class="text-3xl mb-2">📈</div>
                <p class="text-2xl font-bold text-gray-800">${((fees.stripe / fees.trustpay)).toFixed(0)}x</p>
                <p class="text-xs text-gray-500">Más barato que Stripe</p>
            </div>
            <div class="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div class="text-3xl mb-2">💸</div>
                <p class="text-2xl font-bold text-gray-800">$${(avgSavings * 12).toFixed(0)}</p>
                <p class="text-xs text-gray-500">Ahorras al año (12 transacciones)</p>
            </div>
            <div class="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div class="text-3xl mb-2">⚡</div>
                <p class="text-2xl font-bold text-gray-800">${savingsPercent}%</p>
                <p class="text-xs text-gray-500">Reducción de costos</p>
            </div>
        </div>
    `;
    
    // Add pulse animation class to savings
    setTimeout(() => {
        const savingsElement = resultContainer.querySelector('.animate-bounce');
        if (savingsElement) {
            savingsElement.classList.add('pulse-once');
        }
    }, 100);
}

// Initialize calculator
document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.getElementById('amount');
    if (amountInput) {
        amountInput.addEventListener('input', updateCalculator);
        updateCalculator(); // Initial calculation
    }
});
