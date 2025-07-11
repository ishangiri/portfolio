'use client';
import "./globals.css";
import { themeScript } from "./script/theme-script";
import { ThemeProvider } from "../context/ThemeContext";
import { MouseCloudEffect } from "../components/MouseEffect";
import Preloader from "@/components/PreLoader";
import ThemeScrollBackground from "@/components/ThemeScrollBackground";
export default function RootLayout({ children }) {

  
  return (
    <html lang="en"
    suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{__html : themeScript}} />
      </head>
      <body className="overflow-x-hidden">
       <ThemeProvider>
        <MouseCloudEffect />
        <Preloader />
        <ThemeScrollBackground>
        {children}
        </ThemeScrollBackground>
        </ThemeProvider>
      </body>
    </html>
        
  );
}
