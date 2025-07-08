// context/ThemeContext.js
'use client'; // Needed for using hooks and state

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light', // Default value 
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  // Use state to manage the theme in React
  const [theme, setTheme] = useState('light');

  // Effect to synchronize state with DOM/localStorage after mount
  useEffect(() => {
    const themeKey = 'theme';
    const htmlElement = document.documentElement;

    // Read the initial theme from the DOM (set by the script)
    // or fall back to localStorage/system preference if script wasn't there
    let initialTheme = localStorage.getItem(themeKey);
    if (initialTheme === null) {
        initialTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        // Optional: If script didn't run or failed, set initial LS here
        // localStorage.setItem(themeKey, initialTheme);
    }

    setTheme(initialTheme);
    htmlElement.classList.toggle('dark', initialTheme === 'dark'); // Ensure DOM matches state
  }, []); // Run only on mount

  // Effect to update localStorage and DOM class when theme state changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark', theme === 'dark');
  }, [theme]); // Run when 'theme' state changes

  const toggleTheme = () => {
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