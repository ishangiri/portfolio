// app/theme-script.js

export const themeScript = `
  (function () {
    const themeKey = 'theme';
    const classList = document.documentElement.classList;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let theme = localStorage.getItem(themeKey);

    if (theme === null) {
      // If no theme in localStorage, use system preference
      theme = prefersDark ? 'dark' : 'light';
    }

    if (theme === 'dark') {
      classList.add('dark');
    } else {
      classList.remove('dark');
    }

    // Set initial localStorage if it was null (used system preference)
    if (localStorage.getItem(themeKey) === null) {
       localStorage.setItem(themeKey, theme);
    }
  })();
`;