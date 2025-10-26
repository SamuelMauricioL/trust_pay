import React, { useState, useEffect } from 'react';
import { Play, ChevronDown, ChevronUp, Star, X } from 'lucide-react';
import CourseContent from './CourseContent';
import VideoPlayer from './VideoPlayer';
import RatingModal from './RatingModal';

const CoursePage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [hasShownRatingPrompt, setHasShownRatingPrompt] = useState(false);

  // Datos del curso
  const courseData = {
    title: "Bootcamp de Desarrollo Blockchain en Ethereum con Solidity (2025)",
    description: "Conviértete en Desarrollador Blockchain de Ethereum con un Solo Curso. ¡Domina Solidity, Web3.JS, Truffle, Metamask, Remix y Más!",
    rating: 4.7,
    students: "11,902 valoraciones",
    totalLessons: 75365,
    duration: "26 horas",
      sections: [
      {
        id: 1,
        title: "Sección 1: Introducción al Curso",
        lessons: 5,
        duration: "13 min.",
        expanded: true,
        items: [
          { id: "1-1", title: "1. Tu Instructor para este Curso", duration: "2 min.", type: "video" },
          { id: "1-2", title: "2. ¿Para quién es este Curso de Ethereum?", duration: "2 min.", type: "video" },
          { id: "1-3", title: "3. Estructura del Curso - Para que Aproveches al Máximo", duration: "3 min.", type: "video" },
          { id: "1-4", title: "4. Recursos del Curso", duration: "1 min.", type: "article" },
          { id: "1-5", title: "5. Una Nota Rápida sobre las Reseñas", duration: "2 min.", type: "video" }
        ]
      },
      {
        id: 2,
        title: "Sección 2: Remix IDE",
        lessons: 3,
        duration: "14 min.",
        expanded: false,
        items: [
          { id: "2-1", title: "1. Introducción a Remix", duration: "3 min.", type: "video" },
          { id: "2-2", title: "2. Creando tu Primer Smart Contract", duration: "5 min.", type: "video" },
          { id: "2-3", title: "3. Entendiendo los Fundamentos de Solidity", duration: "6 min.", type: "video" }
        ]
      },
      {
        id: 3,
        title: "Sección 3: [Proyecto] Mensajero Blockchain",
        lessons: 2,
        duration: "8 min.",
        expanded: false,
        items: [
          { id: "3-1", title: "1. Configuración del Proyecto Messenger", duration: "4 min.", type: "video" },
          { id: "3-2", title: "2. Implementando la Lógica del Contrato", duration: "4 min.", type: "video" }
        ]
      },
      {
        id: 4,
        title: "Sección 4: [Proyecto] Smart Money - Depósitos y Retiros",
        lessons: 3,
        duration: "12 min.",
        expanded: false,
        items: [
          { id: "4-1", title: "1. Diseñando el Smart Contract de Depósitos", duration: "4 min.", type: "video" },
          { id: "4-2", title: "2. Implementando Retiros Seguros", duration: "5 min.", type: "video" },
          { id: "4-3", title: "3. Testing y Deployment", duration: "3 min.", type: "video" }
        ]
      },
      {
        id: 5,
        title: "Sección 5: [Proyecto] Billetera Inteligente",
        lessons: 2,
        duration: "9 min.",
        expanded: false,
        items: [
          { id: "5-1", title: "1. Arquitectura de la Billetera Inteligente", duration: "5 min.", type: "video" },
          { id: "5-2", title: "2. Funciones de Seguridad y Multi-Firma", duration: "4 min.", type: "video" }
        ]
      }
    ]
  };

  // Calcular progreso total
  const totalLessonsCount = courseData.sections.reduce((acc, section) => acc + section.lessons, 0);
  const progressPercentage = (completedLessons.length / totalLessonsCount) * 100;

  // Marcar lección como completada
  const toggleLessonComplete = (lessonId) => {
    setCompletedLessons(prev => {
      if (prev.includes(lessonId)) {
        return prev.filter(id => id !== lessonId);
      } else {
        return [...prev, lessonId];
      }
    });
  };

  // Efecto para mostrar modal de calificación al 30%
  useEffect(() => {
    if (progressPercentage >= 30 && !hasShownRatingPrompt) {
      setShowRatingModal(true);
      setHasShownRatingPrompt(true);
    }
  }, [progressPercentage, hasShownRatingPrompt]);

  // Reproducir video
  const playVideo = (lesson) => {
    setCurrentVideo(lesson);
  };

  return (
    <div className="min-h-screen bg-[#1c1d1f]">
      {/* Header */}
      <div className="bg-[#1c1d1f] border-b border-gray-700 px-6 py-3">
        <div className="flex items-center justify-between max-w-[1600px] mx-auto">
          <div className="flex items-center gap-4">
            <h1 className="text-white text-xl font-bold">udemy</h1>
            <h2 className="text-white text-sm">{courseData.title}</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                <span className="text-white text-xs">🔍</span>
              </div>
              <span className="text-white text-sm">Tu progreso</span>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-500 transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <span className="text-white text-sm font-semibold">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded transition">
              Compartir
            </button>
            <button className="p-2 text-gray-400 hover:text-white">
              <span className="text-xl">⋮</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex max-w-[1600px] mx-auto">
        {/* Video Player Section */}
        <div className="flex-1 bg-black">
          <VideoPlayer 
            currentVideo={currentVideo}
            onComplete={(lessonId) => toggleLessonComplete(lessonId)}
          />
          
          {/* Tabs */}
          <div className="bg-white border-b border-gray-200">
            <div className="flex gap-8 px-6">
              <button className="py-3 px-1 text-sm font-medium border-b-2 border-black">
                Presentación general
              </button>
              <button className="py-3 px-1 text-sm text-gray-600 hover:text-black">
                Preguntas y respuestas
              </button>
              <button className="py-3 px-1 text-sm text-gray-600 hover:text-black">
                Notas
              </button>
              <button className="py-3 px-1 text-sm text-gray-600 hover:text-black">
                Anuncios
              </button>
              <button className="py-3 px-1 text-sm text-gray-600 hover:text-black">
                Reseñas
              </button>
              <button className="py-3 px-1 text-sm text-gray-600 hover:text-black">
                Herramientas de aprendizaje
              </button>
            </div>
          </div>

          {/* Course Description */}
          <div className="bg-white p-6">
            <p className="text-gray-800 text-lg mb-4">{courseData.description}</p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-orange-500 font-bold text-lg">{courseData.rating}</span>
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-purple-600">{courseData.students}</span>
              </div>
              <span className="text-gray-600">{courseData.totalLessons} estudiantes</span>
              <span className="text-gray-600">{courseData.duration} totales</span>
            </div>
          </div>
        </div>

        {/* Course Content Sidebar */}
        <CourseContent 
          sections={courseData.sections}
          completedLessons={completedLessons}
          onToggleComplete={toggleLessonComplete}
          onPlayVideo={playVideo}
          progressPercentage={progressPercentage}
        />
      </div>

      {/* Rating Modal */}
      {showRatingModal && (
        <RatingModal 
          onClose={() => setShowRatingModal(false)}
          progressPercentage={progressPercentage}
        />
      )}
    </div>
  );
};

export default CoursePage;
