'use client';
import { SkillItem } from "./SkillItem";

export const SkillsCategory = ({ category }) => (
  <div className="w-full  flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
    {/* Content */}
    <div className="relative h-full z-10 w-full max-w-lg">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center transform transition-all duration-700 hover:scale-105">
        {category.category}
      </h3>
      
      {/* Skills Grid */}
      <div className={`grid gap-2 sm:gap-4 animate-fadeIn ${
        category.skills.length <= 4 
          ? 'grid-cols-2 sm:grid-cols-4' 
          : category.skills.length <= 6
          ? 'grid-cols-2 sm:grid-cols-3'
          : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
      }`}>
        {category.skills.map((skill, index) => (
          <SkillItem key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  </div>
);
