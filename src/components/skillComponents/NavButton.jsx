'use client'
import { ChevronRight, ChevronLeft } from "lucide-react";
export const NavButton = ({ onClick, disabled, direction, className = "" }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={` disabled:opacity-50 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group ${className}`}
  >
    {direction === 'left' ? (
      <ChevronLeft size={20} className="text group-hover:text-gray-200 sm:w-6 sm:h-6" />
    ) : (
      <ChevronRight size={20} className="text group-hover:text-gray-200 sm:w-6 sm:h-6" />
    )}
  </button>
);
