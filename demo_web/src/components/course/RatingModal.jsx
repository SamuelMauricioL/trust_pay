import React, { useState } from 'react';
import { Star, X, ThumbsUp, TrendingUp } from 'lucide-react';

const RatingModal = ({ onClose, progressPercentage }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full animate-fade-in">
        {!submitted ? (
          <>
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">¡Gran progreso!</h3>
                    <p className="text-sm text-gray-500">Has completado el {Math.round(progressPercentage)}%</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4">
                  <ThumbsUp className="text-purple-600" size={18} />
                  <span className="text-sm font-medium text-purple-700">
                    ¡Vas muy bien!
                  </span>
                </div>
                <p className="text-gray-700 text-lg mb-2">
                  ¿Cómo va tu experiencia hasta ahora?
                </p>
                <p className="text-sm text-gray-500">
                  Tu opinión nos ayuda a mejorar TrustPay
                </p>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                    className="transition transform hover:scale-110"
                  >
                    <Star
                      size={40}
                      className={`${
                        star <= (hoverRating || rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>

              {/* Rating Text */}
              {rating > 0 && (
                <p className="text-center text-sm text-gray-600 mb-6">
                  {rating === 5 && '¡Excelente! Nos encanta que te guste'}
                  {rating === 4 && '¡Muy bien! Seguimos mejorando'}
                  {rating === 3 && 'Gracias por tu feedback'}
                  {rating === 2 && 'Gracias, trabajaremos en mejorar'}
                  {rating === 1 && 'Lamentamos que no sea lo esperado'}
                </p>
              )}

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
                >
                  Más tarde
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={rating === 0}
                  className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition ${
                    rating > 0
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Enviar
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Success Message */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              ¡Gracias por tu feedback!
            </h3>
            <p className="text-gray-600">
              Tu opinión nos ayuda a mejorar la plataforma
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RatingModal;
