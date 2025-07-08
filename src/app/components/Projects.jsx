'use client';
import { CarouselNavigation } from './projectComponents/CarouselNavigation';
import { ProjectCard } from './projectComponents/ProjectCard';
import { projectsData } from '../data/project';
import { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
     const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation every time it becomes visible
       setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.5, // adjust as needed
      }
    );

   const current = containerRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [])

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length)
  }

  const previousProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length)
  }

  return (
    <div ref={containerRef} id='projects' className="min-h-screen flex  items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className=" text text-sm sm:text-xl  max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            AI integration, and modern web technologies.
          </p>
        </div>

        {/* Projects Carousel */}
        <div className={`relative transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className={`${isVisible} ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-full scale-95' max-w-4xl mx-auto`}>
            <ProjectCard 
              project={projectsData[currentIndex]} 
              isActive={true}
            />
          </div>

          {/* Navigation */}
          <CarouselNavigation 
            currentIndex={currentIndex}
            totalProjects={projectsData.length}
            onPrevious={previousProject}
            onNext={nextProject}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects