// Project Card Component
'use client';
import { ImageCarousel } from "./ImageCarousel";
import { Card, CardContent } from "../ui/card";
import { Eye, Github } from "lucide-react";

export const ProjectCard = ({ project, isActive, currentImageIndex, setCurrentImageIndex }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-36 overflow-x-hidden">
      <div>
        <ImageCarousel images={project.images} projectTitle={project.title} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} />
      </div>
    <Card className={`overflow-hidden bg-transparent max-w-2xl border-none transition-all duration-700 ${
      isActive ? 'scale-100 ' : 'scale-80'
    }`}>
      <CardContent>
          {/* Content Section */}
          <div className="p-2 flex flex-col justify-betweenl">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white delay-600">
                {project.title}
              </h3>
              <p className="text-gray-900 font-semibold sm:text-sm text-xs dark:text-gray-300 mb-6 leading-relaxed delay-700">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={() => window.open(project.demoUrl, '_blank')}
                className="flex items-center sm:space-x-2 space-x-1 cursor-pointer text-xs bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white md:px-6 md:py-3 px-3 py-1.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Eye size={16} />
                <span>Live Demo</span>
              </button>
              {/* <button
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="flex items-center sm:space-x-2 space-x-1 text-xs cursor-pointer border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 md:px-6 md:py-3 px-3 py-1.5  rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Github size={16} />
                <span>Code</span>
              </button> */}
            </div>
          </div>
      </CardContent>
    </Card>
    </div>
  );
};