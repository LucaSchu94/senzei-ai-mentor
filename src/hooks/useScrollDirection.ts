
import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      // Only update if we've scrolled more than 10px to avoid flicker
      if (Math.abs(scrollY - lastScrollY) > 10) {
        setScrollDirection(direction);
        setLastScrollY(scrollY);
      }
    };

    const onScroll = () => updateScrollDirection();
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  return { scrollDirection, isAtTop: lastScrollY < 50 };
};
