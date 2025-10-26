import React from 'react';
import { Play } from 'lucide-react';

const VideoPlayer = ({ currentVideo, onComplete }) => {
  
  // Simular completado de video
  const handleVideoEnd = () => {
    if (currentVideo) {
      onComplete(currentVideo.id);
    }
  };

  return (
    <div className="relative w-full bg-black aspect-video flex items-center justify-center">
      {currentVideo ? (
        <div className="relative w-full h-full">
          {/* Placeholder para video - aquí iría el reproductor real */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&h=675&fit=crop"
              alt="Video placeholder"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              onClick={handleVideoEnd}
              className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition transform hover:scale-110"
            >
              <Play size={32} className="text-black ml-1" fill="black" />
            </button>
          </div>

          {/* Video Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-xl font-semibold">
              {currentVideo.title}
            </h3>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Play size={40} className="text-gray-600" />
          </div>
          <p className="text-gray-400 text-lg">Selecciona una lección para comenzar</p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
