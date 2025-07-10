'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: null,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  // Always start with null to match server rendering
  const [theme, setTheme] = useState(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Effect to hydrate and sync with localStorage/DOM after mount
  useEffect(() => {
    const htmlElement = document.documentElement;
    let initialTheme;

    // First, try to get theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      initialTheme = savedTheme;
    } else {
      // If no saved theme, check if the script already set a class on html
      if (htmlElement.classList.contains('dark')) {
        initialTheme = 'dark';
      } else if (htmlElement.classList.contains('light')) {
        initialTheme = 'light';
      } else {
        // Fallback to system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        initialTheme = prefersDark ? 'dark' : 'light';
      }
    }

    setTheme(initialTheme);
    setIsHydrated(true);

    // Ensure DOM is in sync
    htmlElement.classList.remove('dark', 'light');
    htmlElement.classList.add(initialTheme);
    
    // Save to localStorage if it wasn't already saved
    if (!savedTheme) {
      localStorage.setItem('theme', initialTheme);
    }
  }, []);

  // Effect to update localStorage and DOM when theme changes
  useEffect(() => {
    if (!isHydrated || !theme) return;

    localStorage.setItem('theme', theme);
    const htmlElement = document.documentElement;
    
    htmlElement.classList.remove('dark', 'light');
    htmlElement.classList.add(theme);
  }, [theme, isHydrated]);

  const toggleTheme = () => {
    if (!isHydrated) return;
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};