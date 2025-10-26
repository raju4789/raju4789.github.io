import { useState, useEffect } from 'react';
import { throttle } from '../utils/helpers';

interface ScrollPosition {
  x: number;
  y: number;
  scrollProgress: number;
}

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    scrollProgress: 0,
  });

  useEffect(() => {
    const handleScroll = throttle(() => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (winScroll / height) * 100;

      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
        scrollProgress: scrollProgress || 0,
      });
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

