import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Check, Heart } from 'lucide-react';

function CourseOffer() {
    const navigate = useNavigate();

    const handleBuyNow = () => {
        navigate('/checkout');
    };

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header */}
            <header className="bg-black border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-8">
                            <div className="text-white text-2xl font-bold">NoUdemy</div>
                            <button className="text-gray-300 hover:text-white text-sm">Explorar</button>
                            <div className="relative hidden md:block">
                                <input
                                    type="text"
                                    placeholder="Busca cualquier cosa"
                                    className="bg-gray-800 text-white placeholder-gray-400 px-4 py-2 pr-10 rounded-full w-96 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <svg className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="text-gray-300 hover:text-white text-sm hidden md:block">Planes y precios</button>
                            <button className="text-gray-300 hover:text-white text-sm hidden md:block">NoUdemy Business</button>
                            <button className="text-gray-300 hover:text-white text-sm hidden md:block">Instructor</button>
                            <button className="text-gray-300 hover:text-white text-sm hidden md:block">Aprendiendo</button>
                            <button className="text-gray-300 hover:text-white">
                                <Heart className="w-6 h-6" />
                            </button>
                            <button className="text-gray-300 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                            </button>
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-700">
                                SM
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center gap-2 text-sm text-purple-400">
                    <span className="hover:text-purple-300 cursor-pointer">Negocio</span>
                    <span className="text-gray-600">›</span>
                    <span className="hover:text-purple-300 cursor-pointer">Análisis de negocios e inteligencia empresarial</span>
                    <span className="text-gray-600">›</span>
                    <span className="hover:text-purple-300 cursor-pointer">Cadena de bloques</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Blockchain AZ: Construye una Blockchain, una Criptomoneda + Premio ChatGPT
                        </h1>
                        <p className="text-gray-300 text-lg mb-6">
                            ¡Aprovecha el poder de la tecnología más disruptiva desde internet con ejemplos reales! Domina Blockchain ahora.
                        </p>

                        {/* Badge */}
                        <div className="inline-block bg-yellow-500 text-black px-3 py-1 rounded text-sm font-semibold mb-6">
                            Mejor vendido
                        </div>

                        {/* Ratings and Info */}
                        <div className="flex items-center gap-4 mb-8 text-sm flex-wrap">
                            <div className="flex items-center gap-2">
                                <span className="text-orange-400 font-bold">4.6</span>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-purple-400">(22,142 valoraciones)</span>
                            </div>
                            <span className="text-gray-400">132,123 estudiantes</span>
                        </div>

                        <div className="mb-6 text-sm text-gray-300">
                            <span>Creado por </span>
                            <span className="text-purple-400 underline cursor-pointer">Hadelin de Ponteves</span>
                            <span>, </span>
                            <span className="text-purple-400 underline cursor-pointer">Kirill Eremenko</span>
                            <span>, </span>
                            <span className="text-purple-400 underline cursor-pointer">Equipo SuperDataScience</span>
                            <span>, </span>
                            <span className="text-purple-400 underline cursor-pointer">Ligency</span>
                        </div>

                        <div className="flex items-center gap-4 mb-8 text-sm text-gray-300 flex-wrap">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span>Última actualización: 9/2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                                <span>Inglés</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                </svg>
                                <span>Español</span>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="bg-gray-800 rounded-lg p-8 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-purple-600 p-3 rounded-lg flex-shrink-0">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-lg mb-1">De primera calidad</div>
                                    <div className="text-gray-400 text-sm">
                                        Accede a más de 30,000 cursos de primer nivel con un plan NoUdemy y precios. <span className="text-purple-400 underline cursor-pointer">Consulta planes</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What you'll learn */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-6">¿Qué aprenderás?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">¿Por qué es esto importante?</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Entender la teoría detrás de Blockchain</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Crear una cadena de bloques</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Comprender la teoría detrás de las criptomonedas</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Comprender la teoría detrás de las transacciones de criptomonedas</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Crear su propia moneda</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Comprender la teoría detrás de los contratos inteligentes</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">Crear sus propios contratos inteligentes</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden sticky top-4">
                            {/* Video Preview */}
                            <div className="relative aspect-video bg-gray-800">
                                <img
                                    src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/643db360478709.5a4e92c45df8c.jpg"
                                    alt="Course preview"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-20 transition-all cursor-pointer">
                                    <div className="bg-white rounded-full p-4">
                                        <Play className="w-8 h-8 text-gray-900" />
                                    </div>
                                </div>
                                <button className="absolute top-4 right-4 text-white hover:text-gray-300">
                                    <span className="text-sm">Vista previa de este curso</span>
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="border-b border-gray-200">
                                <div className="flex">
                                    <button className="flex-1 py-3 px-4 text-center text-sm font-semibold border-b-2 border-gray-900 text-gray-900">
                                        Personal
                                    </button>
                                    <button className="flex-1 py-3 px-4 text-center text-sm font-semibold text-gray-600 hover:text-gray-900">
                                        EQUIPOS
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                {/* Info box */}
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                                    <div className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-xs text-gray-700">
                                            Este curso premium está incluido en las suscripciones.
                                        </p>
                                    </div>
                                </div>

                                {/* Subscription box */}
                                <div className="mb-6">
                                    <h3 className="font-semibold text-gray-900 mb-2">Suscríbete a los mejores cursos de NoUdemy</h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Obtén este curso, además de más de 30,000 cursos de primera categoría, con la Suscripción Personal.
                                        <span className="text-purple-600 underline cursor-pointer ml-1">Más información</span>
                                    </p>
                                </div>

                                {/* Pricing */}
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-3xl font-bold">29,90 soles/</span>
                                        <span className="text-lg text-gray-500 line-through">39,90 soles/</span>
                                    </div>
                                    <span className="text-red-600 font-semibold">25% de descuento</span>
                                    <div className="flex items-center gap-2 mt-2">
                                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-red-600 font-semibold">¡Quedan 7 horas a este precio!</span>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="space-y-3">
                                    <button
                                        onClick={handleBuyNow}
                                        className="w-full bg-purple-600 text-white py-3 px-4 rounded font-semibold hover:bg-purple-700 transition-colors"
                                    >
                                        Comprar
                                    </button>
                                    <button className="w-full border-2 border-gray-900 text-gray-900 py-3 px-4 rounded font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                </div>

                                <p className="text-center text-xs text-gray-600 mt-4">
                                    Cancelar en cualquier momento
                                </p>

                                {/* Trial button */}
                                <button className="w-full bg-white border border-gray-300 text-gray-900 py-3 px-4 rounded font-semibold hover:bg-gray-50 transition-colors mt-4">
                                    Prueba la suscripción individual gratis
                                </button>
                                <p className="text-center text-xs text-gray-600 mt-2">
                                    A partir de 58,90 soles después del período de prueba
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseOffer;