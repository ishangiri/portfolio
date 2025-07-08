"use client";
import { useState } from "react"
import {  ExternalLink, Github, Eye } from 'lucide-react'

export const ProjectCard = ({ project, isActive }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={` relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-700 ${
        isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* Project Image */}
      <div className="relative  overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110 cursor-pointer' : 'scale-100'
          }`}
        />
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className=" font-bold mb-3 sm:text-sm text-xs">
          {project.title}
        </h3>
        
        <p className="mb-4 sm:text-sm text-xs line-clamp leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className=" tag px-3 py-2 rounded-lg text-sm font-light"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button 
            onClick={() => window.open(project.demoUrl, '_blank')}
            className="flex cursor-pointer items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-900 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105"
          >
            <Eye size={16} />
            <span>Live Demo</span>
          </button>
          <button 
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="flex cursor-pointer items-center space-x-2 border px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
          >
            <Github size={16} />
            <span>Code</span>
          </button>
        </div>
      </div>
    </div>
  )
}