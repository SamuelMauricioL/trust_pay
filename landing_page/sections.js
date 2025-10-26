// HTML sections for the landing page

const pricingSection = `
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">¿Por Qué Pagar Más?</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Compara las tarifas de los métodos tradicionales con TrustPay. 
                El costo no escala con el monto de la transacción.
            </p>
        </div>

        <div class="overflow-x-auto">
            <table class="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead class="gradient-bg text-white">
                    <tr>
                        <th class="px-6 py-4 text-left text-sm font-semibold">Método de Pago</th>
                        <th class="px-6 py-4 text-left text-sm font-semibold">Tipo de Tarifa</th>
                        <th class="px-6 py-4 text-left text-sm font-semibold">Tarifa por Transacción</th>
                        <th class="px-6 py-4 text-left text-sm font-semibold">¿Escala con el Valor?</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr class="hover:bg-red-50 transition">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3">
                                <i class="fab fa-cc-stripe text-2xl text-blue-600"></i>
                                <span class="font-semibold">Tarjetas / Stripe</span>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-600">Porcentual + Fija</td>
                        <td class="px-6 py-4">
                            <span class="text-xl font-bold text-red-600">2.9% + $0.30</span>
                        </td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                                <i class="fas fa-arrow-up mr-2"></i>
                                Sí (Aumenta)
                            </span>
                        </td>
                    </tr>
                    <tr class="hover:bg-red-50 transition">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3">
                                <i class="fab fa-paypal text-2xl text-blue-700"></i>
                                <span class="font-semibold">PayPal</span>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-600">Porcentual + Fija</td>
                        <td class="px-6 py-4">
                            <span class="text-xl font-bold text-red-600">~3.0% + $0.49</span>
                        </td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                                <i class="fas fa-arrow-up mr-2"></i>
                                Sí (Aumenta)
                            </span>
                        </td>
                    </tr>
                    <tr class="hover:bg-green-50 transition bg-green-50/50">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 gradient-bg rounded-full flex items-center justify-center">
                                    <i class="fas fa-bolt text-white text-sm"></i>
                                </div>
                                <span class="font-bold text-primary">TrustPay (Starknet L2)</span>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-600">Tarifa de Red (Gas)</td>
                        <td class="px-6 py-4">
                            <span class="text-xl font-bold text-green-600">$0.01 - $0.10</span>
                        </td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                <i class="fas fa-check mr-2"></i>
                                No (Independiente)
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Savings Calculator -->
        <div class="mt-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
            <h3 class="text-2xl font-bold text-center mb-6">Calculadora de Ahorros</h3>
            <div class="max-w-2xl mx-auto">
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Monto de la Transacción (USD)</label>
                    <input type="number" id="amount" value="100" min="1" 
                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-lg">
                </div>
                <div class="grid md:grid-cols-3 gap-6" id="savings-result">
                    <!-- Populated by calculator.js -->
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
            <div class="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                    <i class="fas fa-shield-halved text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4">Smart Contract Escrow</h3>
                <p class="text-gray-600">
                    Los fondos se retienen de forma segura en blockchain hasta que se cumplan las condiciones acordadas. 
                    Protección total para compradores y vendedores.
                </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                    <i class="fas fa-robot text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4">Arbitraje con IA</h3>
                <p class="text-gray-600">
                    Jueces AI imparciales resuelven disputas de reembolso basándose en políticas predefinidas y evidencia. 
                    Resolución rápida y justa.
                </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                    <i class="fas fa-chart-line text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4">Costos Predecibles</h3>
                <p class="text-gray-600">
                    Tarifa fija de red que no escala con el monto. Cobra $1 o $1,000 con el mismo costo de transacción.
                </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                    <i class="fas fa-clock text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4">Transacciones Instantáneas</h3>
                <p class="text-gray-600">
                    Confirmaciones en segundos gracias a Starknet L2. No más esperas de 2-3 días hábiles.
                </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                    <i class="fas fa-globe text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-4">Global y Sin Fronteras</h3>
                <p class="text-gray-600">
                    Cobra a clientes de cualquier parte del mundo sin restricciones geográficas ni conversiones de moneda.
                </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                    <i class="fas fa-code text-white text-2xl"></i>
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
            icon: 'laptop-code',
            title: 'Servicios Freelance',
            description: 'Desarrollo web, traducción, diseño, marketing digital. Pagos por hitos con liberación automática.',
            features: [
                'Pago por milestones completados',
                'Verificación de entregables',
                'Protección para ambas partes'
            ]
        },
        {
            color: 'purple',
            icon: 'key',
            title: 'Activos Digitales',
            description: 'Venta de software, licencias, NFTs, stock media. Entrega automática tras verificación de pago.',
            features: [
                'Licencias de software seguras',
                'Transferencia automática de claves',
                'Verificación de autenticidad'
            ]
        },
        {
            color: 'green',
            icon: 'home',
            title: 'Arrendamiento',
            description: 'Depósitos de garantía, alquiler de equipos. Devolución automática al cumplir condiciones.',
            features: [
                'Depósitos sin disputas',
                'Devolución automática',
                'Verificación de estado'
            ]
        },
        {
            color: 'orange',
            icon: 'graduation-cap',
            title: 'Educación',
            description: 'Cursos online con garantía de finalización. Pago al instructor tras completar el contenido.',
            features: [
                'Garantía de finalización',
                'Incentivo de calidad',
                'Mentoreo P2P seguro'
            ]
        },
        {
            color: 'pink',
            icon: 'hand-holding-heart',
            title: 'Crowdfunding',
            description: 'Financiamiento por hitos. Fondos liberados al alcanzar objetivos verificables.',
            features: [
                'Liberación por milestones',
                'Protección a inversores',
                'Subvenciones basadas en resultados'
            ]
        },
        {
            color: 'indigo',
            icon: 'briefcase',
            title: 'Servicios Profesionales',
            description: 'Asesoría legal, fiscal, consultoría. Pago tras entrega de informes o resultados.',
            features: [
                'Entregables verificables',
                'Pago por resultados',
                'Confidencialidad garantizada'
            ]
        }
    ];

    return useCases.map(useCase => `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
            <div class="h-2 bg-gradient-to-r from-${useCase.color}-500 to-${useCase.color}-600"></div>
            <div class="p-6">
                <div class="w-12 h-12 bg-${useCase.color}-100 rounded-lg flex items-center justify-center mb-4">
                    <i class="fas fa-${useCase.icon} text-${useCase.color}-600 text-xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-3">${useCase.title}</h3>
                <p class="text-gray-600 mb-4">${useCase.description}</p>
                <ul class="space-y-2 text-sm">
                    ${useCase.features.map(feature => `
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>${feature}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}
