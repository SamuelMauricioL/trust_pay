import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, FileText, CheckCircle2, Circle } from 'lucide-react';

const CourseContent = ({ sections, completedLessons, onToggleComplete, onPlayVideo, progressPercentage }) => {
  const [expandedSections, setExpandedSections] = useState([1]); // Primera sección expandida por defecto

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getSectionProgress = (section) => {
    if (!section.items || section.items.length === 0) return 0;
    const completedInSection = section.items.filter(item => 
      completedLessons.includes(item.id)
    ).length;
    return completedInSection;
  };

  return (
    <div className="w-[400px] bg-white border-l border-gray-200 flex flex-col h-screen sticky top-0">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900">Contenido del curso</h3>
          <button className="text-gray-400 hover:text-gray-600">
            <span className="text-xl">×</span>
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>{Math.round(progressPercentage)}% completado</span>
        </div>
      </div>

      {/* Sections List */}
      <div className="flex-1 overflow-y-auto course-content-scrollbar">
        {sections.map((section) => {
          const isExpanded = expandedSections.includes(section.id);
          const sectionProgress = getSectionProgress(section);
          
          return (
            <div key={section.id} className="border-b border-gray-200">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    {isExpanded ? (
                      <ChevronUp size={16} className="text-gray-600" />
                    ) : (
                      <ChevronDown size={16} className="text-gray-600" />
                    )}
                    <h4 className="font-semibold text-sm text-gray-900">
                      {section.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 ml-6">
                    <span>{sectionProgress} / {section.lessons}</span>
                    <span>|</span>
                    <span>{section.duration}</span>
                  </div>
                </div>
              </button>

              {/* Section Items */}
              {isExpanded && section.items && section.items.length > 0 && (
                <div className="bg-gray-50">
                  {section.items.map((item) => {
                    const isCompleted = completedLessons.includes(item.id);
                    
                    return (
                      <div
                        key={item.id}
                        className="px-4 py-3 hover:bg-gray-100 transition cursor-pointer group"
                      >
                        <div className="flex items-start gap-3">
                          {/* Checkbox */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleComplete(item.id);
                            }}
                            className="mt-0.5 flex-shrink-0"
                          >
                            {isCompleted ? (
                              <CheckCircle2 
                                size={18} 
                                className="text-purple-600 fill-current" 
                              />
                            ) : (
                              <Circle 
                                size={18} 
                                className="text-gray-400 group-hover:text-gray-600" 
                              />
                            )}
                          </button>

                          {/* Content */}
                          <div 
                            className="flex-1"
                            onClick={() => onPlayVideo(item)}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              {item.type === 'video' ? (
                                <Play size={14} className="text-gray-600" />
                              ) : (
                                <FileText size={14} className="text-gray-600" />
                              )}
                              <span className={`text-sm ${isCompleted ? 'text-gray-600' : 'text-gray-900'}`}>
                                {item.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span>{item.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseContent;
