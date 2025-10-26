// HTML sections for the landing page

const pricingSection = `
<section class="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-12">
            <div class="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                💸 Comparativa de Precios
            </div>
            <h2 class="text-5xl font-black text-gray-900 mb-4">
                ¿Por Qué Pagar <span class="text-red-600">Más</span>?
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Los métodos tradicionales te cobran <strong>hasta 66% más</strong>. 
                Con TrustPay y el <strong>Gas Fee de Arbitraje</strong>, tu dinero se queda donde debe: <strong>contigo</strong> 💰
            </p>
        </div>

        <!-- Comparison Cards (Mobile & Desktop) -->
        <div class="grid md:grid-cols-3 gap-6 mb-12">
            <!-- Stripe Card -->
            <div class="group bg-white rounded-2xl p-6 shadow-xl border-2 border-red-200 hover:border-red-300 transition-all duration-300 relative overflow-hidden">
                <div class="absolute top-0 right-0 text-6xl opacity-5">😱</div>
                
                <!-- Header -->
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <i class="fab fa-stripe text-2xl text-blue-600"></i>
                        </div>
                        <div>
                            <p class="font-bold text-gray-900">Stripe</p>
                            <p class="text-xs text-gray-500">Tarjetas de crédito</p>
                        </div>
                    </div>
                    <span class="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">Costoso</span>
                </div>

                <!-- Fee -->
                <div class="mb-4">
                    <p class="text-3xl font-black text-red-600 mb-1">2.9% + $0.30</p>
                    <p class="text-sm text-gray-600">Por cada transacción</p>
                </div>

                <!-- Example -->
                <div class="bg-red-50 rounded-lg p-3 mb-4">
                    <p class="text-xs text-gray-700 mb-1">💡 Ejemplo en $1,000:</p>
                    <p class="text-lg font-bold text-red-600">Pagas $29.30</p>
                </div>

                <!-- Problem Badge -->
                <div class="flex items-center gap-2 text-xs">
                    <i class="fas fa-arrow-trend-up text-red-500"></i>
                    <span class="text-red-700 font-medium">El costo aumenta con el monto</span>
                </div>
            </div>

            <!-- PayPal Card -->
            <div class="group bg-white rounded-2xl p-6 shadow-xl border-2 border-red-200 hover:border-red-300 transition-all duration-300 relative overflow-hidden">
                <div class="absolute top-0 right-0 text-6xl opacity-5">😓</div>
                
                <!-- Header -->
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <i class="fab fa-paypal text-2xl text-blue-700"></i>
                        </div>
                        <div>
                            <p class="font-bold text-gray-900">PayPal</p>
                            <p class="text-xs text-gray-500">Wallet digital</p>
                        </div>
                    </div>
                    <span class="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">Muy caro</span>
                </div>

                <!-- Fee -->
                <div class="mb-4">
                    <p class="text-3xl font-black text-red-600 mb-1">3.0% + $0.49</p>
                    <p class="text-sm text-gray-600">Por cada transacción</p>
                </div>

                <!-- Example -->
                <div class="bg-red-50 rounded-lg p-3 mb-4">
                    <p class="text-xs text-gray-700 mb-1">💡 Ejemplo en $1,000:</p>
                    <p class="text-lg font-bold text-red-600">Pagas $30.49</p>
                </div>

                <!-- Problem Badge -->
                <div class="flex items-center gap-2 text-xs">
                    <i class="fas fa-arrow-trend-up text-red-500"></i>
                    <span class="text-red-700 font-medium">Peor que Stripe en tarifas</span>
                </div>
            </div>

            <!-- TrustPay Card -->
            <div class="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-2xl border-2 border-green-400 hover:border-green-500 transition-all duration-300 relative overflow-hidden transform hover:scale-105">
                <div class="absolute top-0 right-0 text-6xl opacity-10">🚀</div>
                
                <!-- Header -->
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                            <i class="fas fa-bolt text-white text-xl"></i>
                        </div>
                        <div>
                            <p class="font-bold text-gray-900">TrustPay</p>
                            <p class="text-xs text-green-700">Starknet L2</p>
                        </div>
                    </div>
                    <span class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">Mejor!</span>
                </div>

                <!-- Fee -->
                <div class="mb-4">
                    <p class="text-3xl font-black text-green-600 mb-1">~1% + $0.05</p>
                    <p class="text-sm text-gray-700">Gas Fee de Arbitraje (0.5%-1.5%)</p>
                </div>

                <!-- Example -->
                <div class="bg-green-100 rounded-lg p-3 mb-3">
                    <p class="text-xs text-gray-700 mb-1">💡 Ejemplo en $1,000:</p>
                    <p class="text-lg font-bold text-green-600">Pagas $10.05</p>
                    <p class="text-xs text-gray-500 mt-1">Sin disputa</p>
                </div>

                <!-- Dispute Note -->
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-2 mb-3">
                    <p class="text-xs text-blue-700">⚖️ <strong>+1.5% adicional</strong> solo si hay disputa</p>
                </div>

                <!-- Benefit Badge -->
                <div class="flex items-center gap-2 text-xs">
                    <i class="fas fa-check-circle text-green-500"></i>
                    <span class="text-green-700 font-bold">Hasta 66% más barato! 🎯</span>
                </div>
            </div>
        </div>

        <!-- Visual Comparison Bar -->
        <div class="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 mb-12">
            <h3 class="text-2xl font-bold text-center text-gray-900 mb-6">
                Comparación Visual: Transacción de $1,000
            </h3>
            
            <div class="space-y-4">
                <!-- Stripe Bar -->
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-semibold text-gray-700">Stripe</span>
                        <span class="text-sm font-bold text-red-600">$29.30</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 h-8 rounded-full flex items-center justify-end pr-3 text-white text-xs font-bold" style="width: 29.3%">
                            2.9%
                        </div>
                    </div>
                </div>

                <!-- PayPal Bar -->
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-semibold text-gray-700">PayPal</span>
                        <span class="text-sm font-bold text-red-600">$30.49</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 h-8 rounded-full flex items-center justify-end pr-3 text-white text-xs font-bold" style="width: 30.5%">
                            3.0%
                        </div>
                    </div>
                </div>

                <!-- TrustPay Bar -->
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-semibold text-gray-700">TrustPay (sin disputa)</span>
                        <span class="text-sm font-bold text-green-600">$10.05</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style="width: 10%">
                            ~1%
                        </div>
                    </div>
                </div>
            </div>

            <!-- Savings Highlight -->
            <div class="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border-2 border-yellow-200">
                <div class="flex items-center justify-center gap-3">
                    <span class="text-3xl">💰</span>
                    <div class="text-center">
                        <p class="text-sm text-gray-700">Ahorras con TrustPay</p>
                        <p class="text-3xl font-black text-orange-600">$19.25 - $20.44</p>
                        <p class="text-xs text-gray-600">Por cada $1,000 sin disputa (hasta 66% menos)</p>
                    </div>
                </div>
            </div>
            
            <!-- Dispute Fee Note -->
            <div class="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div class="flex items-center gap-3">
                    <span class="text-2xl">⚖️</span>
                    <div>
                        <p class="text-sm font-bold text-blue-900">Gas Fee de Arbitraje con IA</p>
                        <p class="text-xs text-blue-700 mt-1">
                            Si hay disputa, se aplica un <strong>1.5% adicional</strong> para cubrir el costo del arbitraje con IA.
                            En el ejemplo: $10.05 → $25.05 (aún 15-20% más barato)
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Savings Calculator -->
        <div class="mt-16 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 opacity-50 blur-3xl"></div>
            <div class="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-200 shadow-2xl">
                <div class="text-center mb-8">
                    <div class="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                        🧮 Calculadora Interactiva
                    </div>
                    <h3 class="text-3xl font-bold text-gray-900 mb-2">¿Cuánto Ahorrarás?</h3>
                    <p class="text-gray-600">Ingresa el monto de tu transacción y descubre el ahorro instantáneo</p>
                </div>
                
                <div class="max-w-3xl mx-auto">
                    <!-- Input Section -->
                    <div class="mb-8">
                        <label class="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                            <span class="text-2xl">💰</span>
                            Monto de la Transacción
                        </label>
                        <div class="relative">
                            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-500">$</span>
                            <input type="number" 
                                   id="amount" 
                                   value="100" 
                                   min="1" 
                                   max="100000"
                                   step="10"
                                   class="w-full pl-12 pr-4 py-4 border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 text-2xl font-bold text-gray-800 transition-all duration-300 bg-white shadow-lg"
                                   placeholder="100">
                        </div>
                        
                        <!-- Quick Amount Buttons -->
                        <div class="mt-4 flex flex-wrap gap-2 justify-center">
                            <button onclick="document.getElementById('amount').value=50; document.getElementById('amount').dispatchEvent(new Event('input'))" 
                                    class="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full text-sm font-semibold transition-all hover:scale-105">
                                $50
                            </button>
                            <button onclick="document.getElementById('amount').value=100; document.getElementById('amount').dispatchEvent(new Event('input'))" 
                                    class="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full text-sm font-semibold transition-all hover:scale-105">
                                $100
                            </button>
                            <button onclick="document.getElementById('amount').value=500; document.getElementById('amount').dispatchEvent(new Event('input'))" 
                                    class="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full text-sm font-semibold transition-all hover:scale-105">
                                $500
                            </button>
                            <button onclick="document.getElementById('amount').value=1000; document.getElementById('amount').dispatchEvent(new Event('input'))" 
                                    class="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full text-sm font-semibold transition-all hover:scale-105">
                                $1,000
                            </button>
                            <button onclick="document.getElementById('amount').value=5000; document.getElementById('amount').dispatchEvent(new Event('input'))" 
                                    class="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full text-sm font-semibold transition-all hover:scale-105">
                                $5,000
                            </button>
                            <button onclick="document.getElementById('amount').value=10000; document.getElementById('amount').dispatchEvent(new Event('input'))" 
                                    class="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full text-sm font-semibold transition-all hover:scale-105">
                                $10,000
                            </button>
                        </div>
                    </div>
                    
                    <!-- Results Container -->
                    <div class="grid md:grid-cols-3 gap-6" id="savings-result">
                        <!-- Populated by calculator.js -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

const featuresSection = `
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Características Principales</h2>
            <p class="text-xl text-gray-600">Todo lo que necesitas para pagos seguros y económicos</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl p-8 shadow-lg card-hover relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 w-32 h-32 rounded-full -mr-16 -mt-16"></div>
                <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6 relative shadow-lg">
                    <i class="fas fa-shield-halved text-white text-2xl"></i>
                </div>
                <div class="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Blockchain
                </div>
                <h3 class="text-xl font-bold mb-4">Smart Contract Escrow</h3>
                <p class="text-gray-600">
                    Los fondos se retienen de forma segura en blockchain hasta que se cumplan las condiciones acordadas. 
                    Protección total para compradores y vendedores.
                </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg card-hover relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 w-32 h-32 rounded-full -mr-16 -mt-16"></div>
                <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6 relative shadow-lg">
                    <i class="fas fa-robot text-white text-2xl"></i>
                </div>
                <div class="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    AI Powered
                </div>
                <h3 class="text-xl font-bold mb-4">Arbitraje con IA</h3>
                <p class="text-gray-600">
                    Jueces AI imparciales resuelven disputas de reembolso basándose en políticas predefinidas y evidencia. 
                    Resolución rápida y justa.
                </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg card-hover relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 w-32 h-32 rounded-full -mr-16 -mt-16"></div>
                <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6 relative shadow-lg">
                    <i class="fas fa-chart-line text-white text-2xl"></i>
                </div>
                <div class="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Layer 2
                </div>
                <h3 class="text-xl font-bold mb-4">Costos Predecibles</h3>
                <p class="text-gray-600">
                    Tarifa fija de red que no escala con el monto. Cobra $1 o $1,000 con el mismo costo de transacción.
                </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg card-hover relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 w-32 h-32 rounded-full -mr-16 -mt-16"></div>
                <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6 relative shadow-lg">
                    <i class="fas fa-clock text-white text-2xl"></i>
                </div>
                <div class="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Starknet
                </div>
                <h3 class="text-xl font-bold mb-4">Transacciones Instantáneas</h3>
                <p class="text-gray-600">
                    Confirmaciones en segundos gracias a Starknet L2. No más esperas de 2-3 días hábiles.
                </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg card-hover relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 w-32 h-32 rounded-full -mr-16 -mt-16"></div>
                <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6 relative shadow-lg">
                    <i class="fas fa-globe text-white text-2xl"></i>
                </div>
                <div class="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Web3
                </div>
                <h3 class="text-xl font-bold mb-4">Global y Sin Fronteras</h3>
                <p class="text-gray-600">
                    Cobra a clientes de cualquier parte del mundo sin restricciones geográficas ni conversiones de moneda.
                </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg card-hover relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 w-32 h-32 rounded-full -mr-16 -mt-16"></div>
                <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6 relative shadow-lg">
                    <i class="fas fa-code text-white text-2xl"></i>
                </div>
                <div class="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Developer Friendly
                </div>
                <h3 class="text-xl font-bold mb-4">Fácil Integración</h3>
                <p class="text-gray-600">
                    SDK simple y documentación completa. Integra TrustPay en tu sitio web en minutos.
                </p>
            </div>
        </div>
    </div>
</section>
`;

// Load sections into page
document.getElementById('pricing').outerHTML = pricingSection;
document.getElementById('features').outerHTML = featuresSection;

// Load remaining sections
loadAISection();
loadUseCasesSection();

function loadAISection() {
    const aiSection = document.getElementById('ai-arbitrage');
    if (aiSection) {
        aiSection.outerHTML = `
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div class="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <i class="fas fa-brain mr-2"></i>
                            Tecnología IA
                        </div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-6">
                            Oráculo de Decisión con AI Agents
                        </h2>
                        <p class="text-xl text-gray-600 mb-8">
                            Nuestros jueces de IA analizan cada caso de disputa utilizando machine learning y políticas predefinidas 
                            para tomar decisiones justas e imparciales sobre reembolsos.
                        </p>

                        <div class="space-y-4">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-check text-green-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg mb-1">Decisiones Imparciales</h4>
                                    <p class="text-gray-600">Sin sesgos humanos. Análisis objetivo basado en evidencia y reglas claras.</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-bolt text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg mb-1">Resolución Rápida</h4>
                                    <p class="text-gray-600">Decisiones en minutos, no en días. Reduce tiempos de espera significativamente.</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-shield-alt text-purple-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg mb-1">Transparencia Total</h4>
                                    <p class="text-gray-600">Cada decisión es registrada en blockchain con explicación detallada del razonamiento.</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-cogs text-orange-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg mb-1">Políticas Personalizables</h4>
                                    <p class="text-gray-600">Define tus propias reglas de reembolso según tu modelo de negocio.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
                        <h3 class="text-xl font-bold mb-6">Ejemplo de Decisión AI</h3>
                        <div class="bg-white rounded-lg p-6 shadow-sm mb-4">
                            <div class="flex items-center gap-3 mb-3">
                                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <i class="fas fa-user text-purple-600"></i>
                                </div>
                                <div>
                                    <p class="font-semibold">Caso #1234</p>
                                    <p class="text-sm text-gray-600">Curso online - Solicitud de reembolso</p>
                                </div>
                            </div>
                            <div class="border-t pt-3 space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Progreso del curso:</span>
                                    <span class="font-semibold">15%</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Tiempo desde compra:</span>
                                    <span class="font-semibold">5 días</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Política de reembolso:</span>
                                    <span class="font-semibold">30 días / 20% progreso</span>
                                </div>
                            </div>
                        </div>

                        <div class="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                            <div class="flex items-center gap-3 mb-3">
                                <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                    <i class="fas fa-robot text-white"></i>
                                </div>
                                <div>
                                    <p class="font-bold text-green-900">Decisión AI: Aprobado</p>
                                    <p class="text-sm text-green-700">Reembolso del 100%</p>
                                </div>
                            </div>
                            <p class="text-sm text-gray-700 mb-3">
                                <strong>Razonamiento:</strong> El estudiante ha completado menos del 20% del curso y está 
                                dentro del período de 30 días establecido en la política de reembolso. Se aprueba el reembolso total.
                            </p>
                            <div class="text-xs text-gray-500">
                                <i class="fas fa-clock mr-1"></i>
                                Tiempo de decisión: 0.8 segundos
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

function loadUseCasesSection() {
    const useCasesSection = document.getElementById('use-cases');
    if (useCasesSection) {
        useCasesSection.outerHTML = `
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Casos de Uso</h2>
                    <p class="text-xl text-gray-600">TrustPay se adapta a múltiples industrias y modelos de negocio</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${getUseCaseCards()}
                </div>

                <!-- CTA Section -->
                <div class="mt-20 gradient-bg rounded-2xl p-12 text-center text-white">
                    <h2 class="text-4xl font-bold mb-4">¿Listo para Reducir tus Costos?</h2>
                    <p class="text-xl mb-8 max-w-2xl mx-auto">
                        Únete a miles de negocios que ya están ahorrando con TrustPay
                    </p>
                    <div class="flex justify-center gap-4">
                        <a href="https://trust-pay-7vyx.vercel.app/" target="_blank" class="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
                            Probar Demo Gratis
                        </a>
                        <a href="#contact" class="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition">
                            Contactar Ventas
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 class="text-2xl font-bold gradient-text mb-4">TrustPay</h3>
                        <p class="text-gray-400">Pagos seguros con blockchain</p>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4">Producto</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#features" class="hover:text-white transition">Características</a></li>
                            <li><a href="#pricing" class="hover:text-white transition">Precios</a></li>
                            <li><a href="https://trust-pay-7vyx.vercel.app/" target="_blank" class="hover:text-white transition">Demo</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4">Recursos</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#" class="hover:text-white transition">Documentación</a></li>
                            <li><a href="#" class="hover:text-white transition">API</a></li>
                            <li><a href="#" class="hover:text-white transition">Soporte</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4">Compañía</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#" class="hover:text-white transition">Acerca de</a></li>
                            <li><a href="#" class="hover:text-white transition">Blog</a></li>
                            <li><a href="#" class="hover:text-white transition">Contacto</a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 TrustPay. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
        `;
    }
}

function getUseCaseCards() {
    const useCases = [
        {
            color: 'blue',
            gradient: 'from-blue-500 via-cyan-500 to-blue-600',
            icon: 'laptop-code',
            emoji: '💻',
            badge: 'Más Popular',
            badgeColor: 'bg-blue-500',
            title: 'Servicios Freelance',
            subtitle: 'Desarrollo, Diseño & Marketing',
            description: 'Proyectos por hitos con liberación automática. Protección total para freelancers y clientes.',
            stat: '$5,000',
            statLabel: 'Proyecto promedio',
            savingExample: 'Ahorra $145 en tarifas por proyecto',
            features: [
                { icon: '🎯', text: 'Pago por milestones completados' },
                { icon: '✅', text: 'Verificación automática de entregables' },
                { icon: '🛡️', text: 'Protección para ambas partes' }
            ],
            examples: ['Desarrollo Web', 'UX/UI Design', 'Marketing Digital']
        },
        {
            color: 'purple',
            gradient: 'from-purple-500 via-fuchsia-500 to-purple-600',
            icon: 'key',
            emoji: '🔑',
            badge: 'Tech',
            badgeColor: 'bg-purple-500',
            title: 'Activos Digitales',
            subtitle: 'Software, NFTs & Licencias',
            description: 'Venta segura de activos digitales con entrega automática y verificación on-chain.',
            stat: '100%',
            statLabel: 'Seguridad garantizada',
            savingExample: 'Sin intermediarios, 0% comisión',
            features: [
                { icon: '🔐', text: 'Licencias de software verificadas' },
                { icon: '⚡', text: 'Transferencia instantánea' },
                { icon: '🎨', text: 'NFTs y arte digital' }
            ],
            examples: ['Software Licenses', 'NFT Sales', 'Digital Art']
        },
        {
            color: 'green',
            gradient: 'from-green-500 via-emerald-500 to-green-600',
            icon: 'home',
            emoji: '🏠',
            badge: 'Real Estate',
            badgeColor: 'bg-green-500',
            title: 'Arrendamiento',
            subtitle: 'Propiedades & Equipos',
            description: 'Depósitos de garantía en smart contracts. Devolución automática sin disputas.',
            stat: '$1,200',
            statLabel: 'Depósito promedio',
            savingExample: 'Recupera tu depósito en 24h',
            features: [
                { icon: '💰', text: 'Depósitos sin retención injusta' },
                { icon: '🤖', text: 'Devolución 100% automática' },
                { icon: '📸', text: 'Verificación con evidencia' }
            ],
            examples: ['Apartamentos', 'Oficinas', 'Equipos']
        },
        {
            color: 'orange',
            gradient: 'from-orange-500 via-amber-500 to-orange-600',
            icon: 'graduation-cap',
            emoji: '🎓',
            badge: 'EdTech',
            badgeColor: 'bg-orange-500',
            title: 'Educación',
            subtitle: 'Cursos Online & Mentorías',
            description: 'Garantía de finalización. El instructor recibe el pago tras tu aprobación del curso.',
            stat: '95%',
            statLabel: 'Tasa de finalización',
            savingExample: 'Reembolso si no completas',
            features: [
                { icon: '📚', text: 'Garantía de finalización del curso' },
                { icon: '👨‍🏫', text: 'Pago al instructor tras aprobación' },
                { icon: '🎯', text: 'Mentorías P2P seguras' }
            ],
            examples: ['Cursos Online', 'Bootcamps', 'Mentorías 1:1']
        },
        {
            color: 'pink',
            gradient: 'from-pink-500 via-rose-500 to-pink-600',
            icon: 'hand-holding-heart',
            emoji: '🚀',
            badge: 'Startup',
            badgeColor: 'bg-pink-500',
            title: 'Crowdfunding',
            subtitle: 'Financiamiento por Hitos',
            description: 'Fondos liberados al alcanzar objetivos. Protección total para inversores y creadores.',
            stat: '$50K',
            statLabel: 'Promedio recaudado',
            savingExample: 'Inversores protegidos 100%',
            features: [
                { icon: '🎯', text: 'Liberación por milestones alcanzados' },
                { icon: '🛡️', text: 'Protección a inversores' },
                { icon: '📊', text: 'Transparencia total on-chain' }
            ],
            examples: ['Tech Startups', 'Proyectos Web3', 'Innovación']
        },
        {
            color: 'indigo',
            gradient: 'from-indigo-500 via-violet-500 to-indigo-600',
            icon: 'briefcase',
            emoji: '💼',
            badge: 'B2B',
            badgeColor: 'bg-indigo-500',
            title: 'Servicios Profesionales',
            subtitle: 'Legal, Fiscal & Consultoría',
            description: 'Pago tras entrega de resultados verificables. Confidencialidad y seguridad garantizadas.',
            stat: '$10K',
            statLabel: 'Proyecto promedio',
            savingExample: 'Ahorra $290 en tarifas',
            features: [
                { icon: '📋', text: 'Entregables verificables' },
                { icon: '🎯', text: 'Pago basado en resultados' },
                { icon: '🔒', text: 'Confidencialidad absoluta' }
            ],
            examples: ['Legal', 'Contabilidad', 'Consultoría']
        }
    ];

    return useCases.map((useCase, index) => `
        <div class="group bg-white rounded-2xl shadow-xl overflow-hidden card-hover relative border border-gray-100 hover:border-${useCase.color}-200 transition-all duration-500">
            <!-- Gradient Header -->
            <div class="h-3 bg-gradient-to-r ${useCase.gradient} relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
            
            <!-- Content -->
            <div class="p-6 relative">
                <!-- Badge & Icon Row -->
                <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center gap-3">
                        <div class="w-14 h-14 bg-gradient-to-br ${useCase.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                            ${useCase.emoji}
                        </div>
                        <div>
                            <span class="${useCase.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full">
                                ${useCase.badge}
                            </span>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="text-2xl font-bold bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent">
                            ${useCase.stat}
                        </div>
                        <div class="text-xs text-gray-500">${useCase.statLabel}</div>
                    </div>
                </div>

                <!-- Title & Subtitle -->
                <h3 class="text-xl font-bold text-gray-900 mb-1 group-hover:text-${useCase.color}-600 transition-colors">
                    ${useCase.title}
                </h3>
                <p class="text-sm text-${useCase.color}-600 font-medium mb-3">
                    ${useCase.subtitle}
                </p>
                
                <!-- Description -->
                <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                    ${useCase.description}
                </p>

                <!-- Saving Highlight -->
                <div class="bg-${useCase.color}-50 border border-${useCase.color}-100 rounded-lg p-3 mb-4">
                    <div class="flex items-center gap-2">
                        <span class="text-lg">💰</span>
                        <span class="text-sm font-semibold text-${useCase.color}-700">
                            ${useCase.savingExample}
                        </span>
                    </div>
                </div>

                <!-- Features -->
                <ul class="space-y-2.5 mb-4">
                    ${useCase.features.map(feature => `
                        <li class="flex items-start gap-2.5 text-sm group/item">
                            <span class="text-lg flex-shrink-0 transform group-hover/item:scale-125 transition-transform">
                                ${feature.icon}
                            </span>
                            <span class="text-gray-700 leading-snug">${feature.text}</span>
                        </li>
                    `).join('')}
                </ul>

                <!-- Examples Tags -->
                <div class="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                    ${useCase.examples.map(example => `
                        <span class="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full hover:bg-${useCase.color}-100 hover:text-${useCase.color}-700 transition-colors cursor-default">
                            ${example}
                        </span>
                    `).join('')}
                </div>

                <!-- Hover Effect Icon -->
                <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <i class="fas fa-arrow-right text-${useCase.color}-500 text-xl"></i>
                </div>
            </div>

            <!-- Bottom Glow Effect -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
    `).join('');
}
