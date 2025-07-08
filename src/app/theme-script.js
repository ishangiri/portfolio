export const themeScript = `
 (function () {
 const themeKey = 'theme';
 const htmlClassList = document.documentElement.classList;
 const bodyClassList = document.body?.classList;
 const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
 let theme = localStorage.getItem(themeKey);
 
 if (theme === null) {
 // If no theme in localStorage, use system preference
 theme = prefersDark ? 'dark' : 'light';
 }
 
 // Clear any existing theme classes first from both html and body
 htmlClassList.remove('dark', 'light');
 if (bodyClassList) {
 bodyClassList.remove('dark', 'light');
 }
 
 // Add the correct theme class to both html and body
 htmlClassList.add(theme);
 if (bodyClassList) {
 bodyClassList.add(theme);
 }
 
 // Set initial localStorage if it was null (used system preference)
 if (localStorage.getItem(themeKey) === null) {
 localStorage.setItem(themeKey, theme);
 }
 })();
`;