"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Profile = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation every time it becomes visible
        setIsLoaded(entry.isIntersecting);
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
    const link = document.createElement("a");
    link.href = "/IshanGiri.pdf";
    link.download = "IshanGiri.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      ref={containerRef}
      id="profile"
      className=" min-h-screen flex items-center justify-center overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Picture - Left Side with bounce animation */}
          <div className="flex justify-center lg:justify-end">
            <div
              className={`relative transform transition-all duration-1000 ease-out ${
                isLoaded
                  ? "translate-x-0 opacity-100 scale-100"
                  : "-translate-x-full opacity-0 scale-95"
              } hover:scale-105 transition-transform duration-300 animate-bounce-slow`}
            >
              {/* Profile Picture */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-900 flex items-center justify-center">
                  <div className="relative w-72 h-72 rounded-full overflow-hidden">
                    <Image
                      src="/profile.png"
                      alt="Ishan Giri"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 ease-out delay-300 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="space-y-6">
              {/* Greeting - Coming from top */}
              <div
                className={`transform transition-all duration-1000 ease-out delay-500 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-20 opacity-0"
                }`}
              >
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
                  Ishan Giri
                </h1>
              </div>

              {/* Title - Coming from right */}
              <div
                className={`transform transition-all duration-2000 ease-out delay-700 ${
                  isLoaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <h2 className="text-blue-900 dark:text-white text-2xl lg:text-3xl ease-out delay-700 font-semibold">
                  Full Stack Developer | Recent Graduate
                </h2>
              </div>

              {/* Summary - Coming from right */}
              <div
                className={`transform transition-all duration-800 ease-out delay-900 ${
                  isLoaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }`}
              >
                <p className=" sm:text-sm text-xs leading-relaxed">
                  Hi, I'm Ishan Giri — a 22-year-old tech enthusiast originally
                  from Nepal, now based in Gold Coast, Australia. I didn’t grow
                  up with a clear dream or career plan, but my curiosity for
                  technology and passion for problem-solving naturally drew me
                  towards software development. What started as playing games
                  and tinkering with tech turned into a dedicated journey of
                  learning and building. Today, I’m grinding hard to carve out
                  my place in the tech industry, eager to grow and make an
                  impact with code.
                </p>
              </div>

              {/* Download Resume Button - Coming from right */}
              <div
                className={`transform transition-all duration-800 ease-out delay-1100 ${
                  isLoaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-30 opacity-0"
                }`}
              >
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
              <div
                className={`transform transition-all duration-800 ease-out delay-1300 ${
                  isLoaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-40 opacity-0"
                }`}
              >
                <div className="flex justify-center items-center sm:justify-start space-x-6 mt-8">
                  <a
                    href="https://github.com/ishangiri"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transform hover:scale-110 transition-all duration-300"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 0.297C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729
      1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.776.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.931
      0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404
      1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.118 3.176.77.84 1.236 1.91 1.236 3.22
      0 4.609-2.804 5.624-5.475 5.921.43.37.823 1.1.823 2.222 0 1.606-.015 2.896-.015 3.286
      0 .321.218.694.825.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ishan-giri-557686288/"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
