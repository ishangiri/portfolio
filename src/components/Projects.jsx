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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
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
    setCurrentImageIndex(0);
  };

  const previousProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    setCurrentImageIndex(0);
  };

  return (
    <div ref={containerRef} id="projects" className=" flex items-center justify-center overflow-x-hidden ">
      <div className="mx-auto px-2 sm:px-4 lg:px-6">
        {/* Projects Carousel */}
        <div className={`relative transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <div>
            <ProjectCard
              project={projectsData[currentIndex]}
              isActive={true}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
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