import { useState, useEffect } from 'react';
import { throttle } from '../utils/helpers';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
};

