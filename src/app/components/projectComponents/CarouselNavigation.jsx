'use client';
import {ChevronLeft, ChevronRight} from 'lucide-react';
// Carousel Navigation Component
export const CarouselNavigation = ({ currentIndex, totalProjects, onPrevious, onNext }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={onPrevious}
        className=" p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 "
      >
        <ChevronLeft size={24} className=" text" />
      </button>
      
      <div className="flex space-x-2">
        {Array.from({ length: totalProjects }, (_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
      
      <button
        onClick={onNext}
        className=" p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <ChevronRight size={24} className="text" />
      </button>
    </div>
  )
}