'use client';
import React, { useState, useEffect, useRef } from 'react';
import { NavButton } from './skillComponents/NavButton';
import { WalkingStickman } from './skillComponents/WalkingStickMan';
import { SkillsCategory } from './skillComponents/SkillsCategory';
import { skillsData } from '../data/skills';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [stickmanPosition, setStickmanPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Observer for in-view animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5}
    );

    const current = containerRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  useEffect(() => {
    const progress = (currentIndex / (skillsData.length - 1)) * 100;
    setStickmanPosition(progress);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % skillsData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + skillsData.length) % skillsData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div
      ref={containerRef}
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden px-4"
    >
      {/* Heading animation */}
      <div
        className={`text-center mb-6 transition-all duration-1000 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-2 font-semibold text-blue-900 dark:text-white bg-clip-text  delay-500">
          Skills
        </h2>
      </div>

      {/* Carousel container animation */}
      <div
        className={`relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden transition-all duration-1000 ease-in-out ${
          isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-32 opacity-0 scale-95'
        }`}
      >
        {/* Stickman rail */}
        <div className="relative h-12 sm:h-16 bg-transparent">
          <WalkingStickman position={stickmanPosition} />
          <div className="absolute top-1 left-4 w-1 h-1 bg-white rounded-full animate-bounce" />
          <div className="absolute top-2 right-8 w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1 left-1/3 w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        </div>

        {/* Skills carousel with animated cards */}
        <div className="relative h-full sm:h-96 overflow-x-hidden">
          <div
            className="flex items-center mr-12 transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {skillsData.map((category, index) => (
              <div
                key={category.category}
                className={`w-full flex-shrink-0 h-full px-6 sm:px-12 transition-all duration-1000 ease-in-out ${
                  isVisible
                    ? index < currentIndex
                      ? 'translate-x-[-30px] opacity-100'
                      : 'translate-x-[30px] opacity-100'
                    : 'opacity-0'
                }`}
              >
                <SkillsCategory category={category} isActive={index === currentIndex} />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <NavButton
            onClick={handlePrev}
            disabled={isAnimating}
            direction="left"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2"
          />
          <NavButton
            onClick={handleNext}
            disabled={isAnimating}
            direction="right"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex justify-center items-center space-x-3 py-4">
          {skillsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === currentIndex
                  ? 'bg-blue-600 scale-125 shadow'
                  : 'bg-gray-400/40 dark:bg-gray-500 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
