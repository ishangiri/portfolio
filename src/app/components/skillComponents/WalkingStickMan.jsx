"use client";
export const WalkingStickman = ({ position }) => (
  <div 
    className="absolute bottom-0 transform -translate-x-1/2 transition-all duration-1000 ease-in-out"
    style={{ left: `${position}%` }}
  >
    <div className="relative animate-bounce">
      <svg width="24" height="36" viewBox="0 0 24 36" className="text-gray-700 dark:text-gray-300 sm:w-8 sm:h-12">
        <circle cx="12" cy="4" r="3" fill="currentColor" className="animate-pulse" />
        <line x1="12" y1="7" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <g className="animate-pulse">
          <line x1="12" y1="12" x2="7" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="12" x2="17" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g className="origin-bottom animate-pulse">
          <line x1="12" y1="21" x2="9" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="21" x2="15" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
      <div className="w-1.5 h-0.5 sm:w-2 sm:h-1 bg-gray-300 dark:bg-gray-600 rounded-full animate-ping"></div>
    </div>
  </div>
);