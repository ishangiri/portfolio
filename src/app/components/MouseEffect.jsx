'use client';
import { useEffect } from 'react';

export const MouseCloudEffect = () => {
  useEffect(() => {
    const blobs = [];
    
    const createCloudBlob = (x, y) => {
      const blob = document.createElement('div');
      blob.className = 'cloudy-trail';
      
      // Set initial position immediately
      blob.style.left = `${x}px`;
      blob.style.top = `${y}px`;
      
      document.body.appendChild(blob);
      blobs.push(blob);
      
      // Remove blob after animation
      setTimeout(() => {
        if (blob && blob.parentNode) {
          blob.remove();
        }
        const index = blobs.indexOf(blob);
        if (index > -1) {
          blobs.splice(index, 1);
        }
      }, 3000);
    };

    const handleMouseMove = (e) => {
      // Create fewer blobs to avoid performance issues
      createCloudBlob(e.clientX, e.clientY);
      
      // Optional: Add slight random offset for variety
      if (Math.random() < 0.3) { // 30% chance for second blob
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        createCloudBlob(e.clientX + offsetX, e.clientY + offsetY);
      }
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      // Clean up any remaining blobs
      blobs.forEach(blob => {
        if (blob && blob.parentNode) {
          blob.remove();
        }
      });
    };
  }, []);

  return null;
};