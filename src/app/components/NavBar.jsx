'use client'
import React, { useState, useEffect } from 'react'
import ThemeToggle from './button'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('profile');
  const [time, setTime] = useState(null);
  
  const navItems = [
    { name: "Profile", href: "#profile" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    {name: "Education", href: "#education"}
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100 // Offset for navbar height
      
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
  }, [])

  useEffect(() => {
      
  const time = (() => {
  const currentTime = new Date();
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  return new Intl.DateTimeFormat('en-US', options).format(currentTime);
});
setTime(time());
  },[])


  return (
    <nav className="navbar h-20 md:h-auto fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('#home')}
              className="md:text-2xl font-bold transition-colors text duration-200 hover:text-blue-600 cursor-pointer"
            >
              {time}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href.replace('#', '')
                      ? 'dark:text-blue-900 bg-blue-50 dark:bg-slate-400'
                      : 'hover:bg-gray-100  dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('#contact')}
                className=" border-black dark:border-blue-900 hover:scale-120 border-2 cursor-pointer text px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Hire Me
              </button>
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
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
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
          <button
            onClick={() => scrollToSection('#contact')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-4 text-center"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar