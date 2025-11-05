'use client';

import { useEffect } from 'react';

export default function AutoScrollHelper() {
  useEffect(() => {
    let hasJumpedBelowVideo = false;

    const jumpBelowVideo = () => {
      const modelsRoot = document.getElementById('models-root');
      if (!modelsRoot) return;
      
      hasJumpedBelowVideo = true;
      window.scrollTo({ top: modelsRoot.offsetTop, behavior: 'smooth' });
    };

    // Mouse wheel / trackpad scroll
    const handleWheel = (event: WheelEvent) => {
      if (window.scrollY === 0 && event.deltaY > 0 && !hasJumpedBelowVideo) {
        event.preventDefault();
        jumpBelowVideo();
      }
    };

    // Touch scroll (mobile)
    let touchStartY = 0;
    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (window.scrollY === 0 && !hasJumpedBelowVideo) {
        const touchEndY = event.touches[0].clientY;
        const deltaY = touchStartY - touchEndY;
        
        if (deltaY > 50) { // Swipe up
          event.preventDefault();
          jumpBelowVideo();
        }
      }
    };

    // Attach listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return null; // This component doesn't render anything
}

