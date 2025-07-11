'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

export default function ThemeAnimatedBackground({ children }) {
  const { theme } = useTheme();
 const { scrollYProgress } = useScroll({
  target: typeof window !== 'undefined' ? undefined : null,
  offset: ['start start', 'end end'],
});

  const [moonYOffset, setMoonYOffset] = useState([0, -200]);

useEffect(() => {
  const updateMoonYOffset = () => {
    if(window.innerWidth <= 480) setMoonYOffset([0, -80]);
    else if(window.innerWidth <= 768) setMoonYOffset([0, -130]);
    else setMoonYOffset([0, -200]);
  }
  updateMoonYOffset();
  window.addEventListener('resize', updateMoonYOffset);
  return () => window.removeEventListener('resize', updateMoonYOffset);
}, []);
  
  // Dark mode animations
  const starOpacity = useTransform(scrollYProgress, [0, 1], theme === 'dark' ? [0.4, 1] : [0, 0]);
  const moonY = useTransform(scrollYProgress, [0, 1], moonYOffset);
  const moonOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.8, 0.6]);
  const starfieldY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Light mode animations
  const cloudOpacity = useTransform(scrollYProgress, [0, 1], theme === 'light' ? [0.8, 1] : [0, 0]);
  const sunY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const sunRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const cloudDrift = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  const [showExtraStars, setShowExtraStars] = useState(false);
  
  useEffect(() => {
    setShowExtraStars(theme === 'dark');
  }, [theme]);

  return (
    <div className='overflow-x-hidden'>
    <>
      {/* Dark mode background */}
      {theme === 'dark' && (
        <>
          {/* Starfield background */}
          <motion.div
            aria-hidden="true"
            style={{ 
              opacity: starOpacity,
              y: starfieldY 
            }}
            className="fixed inset-0 pointer-events-none z-[-10]"
          >
            <div className="dark-starfield w-full h-full" />
          </motion.div>
          
          {/* Moon */}
          <motion.div
            aria-hidden="true"
            style={{ 
              y: moonY,
              opacity: moonOpacity
            }}
            className="fixed top-16 md:top-40 right-10 pointer-events-none z-[-9]"
          >
            <div className="moon w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 shadow-2xl relative">
              {/* Moon craters */}
              <div className="absolute top-3 left-4 w-3 h-3 bg-gray-400 rounded-full opacity-30"></div>
              <div className="absolute top-8 right-3 w-2 h-2 bg-gray-400 rounded-full opacity-40"></div>
              <div className="absolute bottom-4 left-6 w-2 h-2 bg-gray-400 rounded-full opacity-20"></div>
              
              {/* Moon glow */}
              <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-lg scale-150"></div>
            </div>
          </motion.div>
          
          {/* Extra star effects */}
          {showExtraStars && <ExtraStarAnimation />}
        </>
      )}

      {/* Light mode background */}
      {theme === 'light' && (
        <>
          {/* Clouds */}
          <motion.div
            aria-hidden="true"
            style={{ 
              opacity: cloudOpacity,
              x: cloudDrift
            }}
            className="fixed inset-0 pointer-events-none z-[-10]"
          >
            <div className="light-clouds w-full h-full" />
          </motion.div>
          
          {/* Sun */}
          <motion.div
            aria-hidden="true"
            style={{ 
              y: sunY,
              rotate: sunRotation
            }}
            className="fixed top-16 md:top-40 right-10 pointer-events-none z-[-9]"
          >
            <div className="sun w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 relative">
              {/* Sun rays */}
              <div className="absolute inset-0 rounded-full animate-pulse">
                <div className="absolute top-0 left-1/2 w-1 h-6 bg-yellow-400 transform -translate-x-1/2 -translate-y-6"></div>
                <div className="absolute top-0 right-0 w-1 h-4 bg-yellow-400 transform rotate-45 translate-x-3 -translate-y-3"></div>
                <div className="absolute top-1/2 right-0 w-6 h-1 bg-yellow-400 transform -translate-y-1/2 translate-x-6"></div>
                <div className="absolute bottom-0 right-0 w-1 h-4 bg-yellow-400 transform -rotate-45 translate-x-3 translate-y-3"></div>
                <div className="absolute bottom-0 left-1/2 w-1 h-6 bg-yellow-400 transform -translate-x-1/2 translate-y-6"></div>
                <div className="absolute bottom-0 left-0 w-1 h-4 bg-yellow-400 transform rotate-45 -translate-x-3 translate-y-3"></div>
                <div className="absolute top-1/2 left-0 w-6 h-1 bg-yellow-400 transform -translate-y-1/2 -translate-x-6"></div>
                <div className="absolute top-0 left-0 w-1 h-4 bg-yellow-400 transform -rotate-45 -translate-x-3 -translate-y-3"></div>
              </div>
              {/* Sun glow */}
              <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-40 blur-xl scale-150 animate-pulse"></div>
            </div>
          </motion.div>
        </>
      )}

      {/* Main content */}
      <div className="relative z-0">
        {children}
      </div>
    </>
    </div>
  );
}

// Enhanced star animation component
function ExtraStarAnimation() {
  const [shootingStars, setShootingStars] = useState([]);
  const [sparkles, setSparkles] = useState([]);
 

  useEffect(() => {
    // Create shooting stars periodically
    const shootingInterval = setInterval(() => {
      const newStar = {
        id: Date.now(),
        startX: Math.random() * 0.5,
        startY: Math.random() * window.innerHeight * 0.5,
        duration: 2 + Math.random() * 3
      };
      setShootingStars(prev => [...prev.slice(-2), newStar]);
    }, 3000);

    // Create sparkles
    const sparkleInterval = setInterval(() => {
      const newSparkle = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 2 + Math.random() * 3,
        duration: 1 + Math.random() * 2
      };
      setSparkles(prev => [...prev.slice(-5), newSparkle]);
    }, 1500);

    return () => {
      clearInterval(shootingInterval);
      clearInterval(sparkleInterval);
    };
  }, []);

  return (
    <>

      {/* Shooting stars */}
      <motion.div 
  aria-hidden="true"
  className="fixed top-0 left-0 w-screen h-screen pointer-events-none overflow-hidden z-[-11]"
>
  {shootingStars.map(star => (
    <motion.div
      key={star.id}
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        left: star.startX,
        top: star.startY,
        boxShadow: '0 0 6px 2px rgba(255,255,255,0.6)',
        zIndex: -1, // always behind moon etc
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        x: [0, 150, 300],  // reduced max x to keep inside mobile viewport
        y: [0, 80, 150]    // reduce y range too for mobile
      }}
      transition={{
        duration: star.duration,
        ease: "easeOut"
      }}
    />
  ))}
</motion.div>

      {/* Twinkling sparkles */}
      {sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          className="absolute bg-white rounded-full"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            boxShadow: '0 0 10px rgba(255,255,255,0.8)'
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: sparkle.duration,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
}