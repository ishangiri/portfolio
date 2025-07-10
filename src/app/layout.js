'use client';
import "./globals.css";
import { themeScript } from "./script/theme-script";
import { ThemeProvider } from "../context/ThemeContext";
import { MouseCloudEffect } from "../components/MouseEffect";
export default function RootLayout({ children }) {

  
  return (
    <html lang="en"
    suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{__html : themeScript}} />
      </head>
      <body>
       <ThemeProvider>
        <MouseCloudEffect />
        {children}
        </ThemeProvider>
      </body>
    </html>
        
  );
}
