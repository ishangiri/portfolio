'use client';
import { ChevronLeft, ChevronRight } from "lucide-react";
// Project Navigation Component
export const ProjectNavigation = ({ currentIndex, totalProjects, onPrevious, onNext }) => {
  return (
    <div className="flex items-center justify-center space-x-6">
      <button
        onClick={onPrevious}
        className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-700"
      >
        <ChevronLeft size={24} className="text-gray-600 dark:text-gray-400" />
      </button>
      <div className="flex space-x-2">
        {Array.from({ length: totalProjects }, (_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 cursor-pointer'
            }`}
            onClick={() => {
              currentIndex == index
            }}
          />
        ))}
      </div>
      
      <button
        onClick={onNext}
        className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow- cursor-pointer transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-700"
      >
        <ChevronRight size={24} className="text-gray-600  dark:text-gray-400" />
      </button>
    </div>
  );
};