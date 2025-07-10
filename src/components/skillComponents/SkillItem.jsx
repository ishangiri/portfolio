'use client';

export const SkillItem = ({ skill, index }) => (
  <div
    className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg transition-all duration-300 hover:scale-105 group"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className=" text w-10 h-10 sm:w-10 sm:h-10 mb-2 sm:mb-3 flex items-center justify-center">
     {skill.logo && <span>{skill.logo}</span>}
      <div className="hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full text text-xs sm:text-sm items-center justify-center font-bold backdrop-blur-sm">
        {skill.name.charAt(0)}
      </div>
    </div>
    <span className=" text text-xs sm:text-sm font-medium text-center leading-tight">
      {skill.name}
    </span>
  </div>
);
