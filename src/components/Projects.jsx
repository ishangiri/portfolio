'use client';
// Main Projects Component
import { useState, useEffect, useRef } from "react";
import { ProjectNavigation } from "./projectComponents/ProjectNavigation";
import { ProjectCard } from "./projectComponents/ProjectCard";
import { projectsData } from "../data/project";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    const current = containerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const previousProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <div ref={containerRef} id="projects" className="min-h-screen flex items-center justify-center overflow-x-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-2 font-semibold text-blue-900 dark:text-white bg-clip-text  delay-500">
            My Projects
          </h2>
        </div>

        {/* Projects Carousel */}
        <div className={`relative transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <div>
            <ProjectCard
              project={projectsData[currentIndex]}
              isActive={true}
            />
          </div>

          {/* Project Navigation */}
          <ProjectNavigation
            currentIndex={currentIndex}
            totalProjects={projectsData.length}
            onPrevious={previousProject}
            onNext={nextProject}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;