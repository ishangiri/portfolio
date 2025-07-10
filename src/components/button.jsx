// components/ThemeToggle.js
'use client'; // Needed for using hooks and event handlers

import { useTheme } from "../context/ThemeContext";


const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`button cursor-pointer`}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default ThemeToggle;