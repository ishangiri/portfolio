'use client';
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { MouseCloudEffect } from "../components/MouseEffect";
import Preloader from "@/components/PreLoader";
import ThemeScrollBackground from "@/components/ThemeScrollBackground";
import { Analytics } from "@vercel/analytics/next"
import { useEffect } from "react";

export default function RootLayout({ children }) {

   useEffect(() => {
    document.title = `Ishan's Portfolio`;
  }, []);

  
  return (
    <html lang="en"
    suppressHydrationWarning
    >
      <body className="overflow-x-hidden">
       <ThemeProvider>
        <MouseCloudEffect />
        <Preloader />
        <Analytics />
        <ThemeScrollBackground>
        {children}
        </ThemeScrollBackground>
        </ThemeProvider>
      </body>
    </html>
        
  );
}
