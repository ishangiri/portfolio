'use client';
import "./globals.css";
import { themeScript } from "./theme-script";
import { ThemeProvider } from "./context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    className=""
    suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{__html : themeScript}} />
      </head>
      <body>
       <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
        
  );
}
