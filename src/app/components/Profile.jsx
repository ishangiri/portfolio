'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const Profile = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation every time it becomes visible
       setIsLoaded(entry.isIntersecting)
      },
      {
        threshold: 0.5, // adjust as needed
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a')
    link.href = '/IGIRI.pdf'
    link.download = 'IGIRI.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div ref={containerRef} id='profile' className=" min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Picture - Left Side with bounce animation */}
          <div className="flex justify-center lg:justify-end">
            <div className={`relative transform transition-all duration-1000 ease-out ${
              isLoaded ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-full opacity-0 scale-95'
            } hover:scale-105 transition-transform duration-300 animate-bounce-slow`}>
              
              {/* Profile Picture */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-900 flex items-center justify-center">
                  {/* Using Next.js Image component - replace with actual image path */}
                  <div className="relative w-72 h-72 rounded-full overflow-hidden">
                    <Image
                      src="/profile.png" // Replace with your actual image path
                      alt="Ishan Giri"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Fallback placeholder when no image is available */}
                  {/* <div className="w-72 h-72 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-6xl font-bold">
                    IG
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="space-y-6">
              
              {/* Greeting - Coming from top */}
              <div className={`transform transition-all duration-1000 ease-out delay-500 ${
                isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
              }`}>
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-300 to-blue-900 bg-clip-text text-transparent animate-pulse">
                  Hi, I'm Ishan
                </h1>
              </div>

              {/* Title - Coming from right */}
              <div className={`transform transition-all duration-2000 ease-out delay-700 ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  Full Stack Developer | Mobile Developer | Recent Graduate
                </h2>
              </div>

              {/* Summary - Coming from right */}
              <div className={`transform transition-all duration-800 ease-out delay-900 ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                <p className=" sm:text-sm text-xs leading-relaxed">
                Recent Bachelor of Information Technology graduate with a strong foundation in full stack development and hands-on expertise in TypeScript, JavaScript, Node.js, React, Python (FastAPI), and relational/non-relational databases. Proficient with Git, Docker, CI/CD pipelines, and AWS cloud services, with practical experience working in Agile environments. Proven ability to build responsive UIs, design and integrate RESTful APIs, and deploy scalable applications to production. Passionate about writing clean, maintainable code and delivering robust, high-impact software solutions that accelerate business outcomes.
                </p>
              </div>

              {/* Download Resume Button - Coming from right */}
              <div className={`transform transition-all duration-800 ease-out delay-1100 ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button 
                    onClick={handleDownloadResume}
                    className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    Download Resume
                  </button>
                </div>
              </div>

              {/* Social Links - Coming from right */}
              <div className={`transform transition-all duration-800 ease-out delay-1300 ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                <div className="flex justify-center items-center sm:justify-start space-x-6 mt-8">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.3 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile