'use client'
import React, { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import { useRouter } from 'next/navigation'

const NavBar = ({ 
  navItems = [],
  brandContent = null,
  showTime = false,
  ctaButton = null,
  activeTracking = true,
  className = "",
  onItemClick = null,
  showBackArrow = false
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('profile');
  const [time, setTime] = useState(null);
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Smooth scroll function
  const scrollToSection = (item) => {
    // If it's an external link or route
    if (item.href.startsWith('http') || item.href.startsWith('/')) {
      if (item.href.startsWith('/')) {
        router.push(item.href)
      } else {
        window.open(item.href, '_blank')
      }
    } else {
      // Internal anchor link
      const element = document.getElementById(item.href.replace('#', ''))
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
      router.push(item.href)
    }
    
    // Custom click handler
    if (onItemClick) {
      onItemClick(item)
    }
    
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  // Track active section on scroll (only for anchor links)
  useEffect(() => {
    if (!activeTracking) return

    const handleScroll = () => {
      const anchorItems = navItems.filter(item => item.href.startsWith('#'))
      const sections = anchorItems.map(item => item.href.replace('#', ''))
      const scrollPosition = window.scrollY + 200
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems, activeTracking])

  // Time display functionality
  useEffect(() => {
    if (!showTime) return

    const updateTime = () => {
      const currentTime = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      return new Intl.DateTimeFormat('en-US', options).format(currentTime);
    };

    setTime(updateTime());
    const interval = setInterval(() => {
      setTime(updateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [showTime])

  // Default brand content
  const defaultBrandContent = showTime ? (
    <div className="flex-shrink-0 text-yellow-400 dark:text-gray-300 items-center font-bold md:text-xl">
      {time}
    </div>
  ) : (
    <div className="flex-shrink-0 text-yellow-400 dark:text-gray-300 items-center font-bold md:text-xl">
      Brand
    </div>
  );

  return (
    <nav className={`h-30 md:h-auto fixed top-0 left-0 right-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Back Arrow & Logo/Brand */}
          <div className="flex items-center space-x-3">
            {showBackArrow && (
              <button
                onClick={handleBackClick}
                className="flex items-center justify-center p-2 rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                style={{ color: 'var(--card-foreground)' }}
                aria-label="Go back to home"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
            )}
            {brandContent || defaultBrandContent}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden p-4 md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item)}
                  className={`cursor-pointer px-3 py-2 rounded-lg text-md font-semibold transition-all duration-200 ${
                    activeSection === item.href.replace('#', '')
                      ? 'dark:text-blue-900 bg-blue-50 dark:bg-slate-400'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div> 

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              style={{ color: 'var(--card-foreground)' }}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 dark:border-gray-700"
             style={{ backgroundColor: 'var(--card)' }}>
          {/* Mobile Back Arrow */}
          {showBackArrow && (
            <button
              onClick={handleBackClick}
              className="flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>
          )}
          
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item)}
              className={`title w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                activeSection === item.href.replace('#', '')
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                  : ''
              }`}
            >
              {item.name}
            </button>
          ))}
          
          {/* Mobile CTA Button */}
          {ctaButton && (
            <button
              onClick={() => scrollToSection(ctaButton)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-4 text-center"
            >
              {ctaButton.name}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar