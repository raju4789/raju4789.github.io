import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
  } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [node, setNode] = useState<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
      observer.current = null;
    }

    if (frozen) return;

    if (node) {
      observer.current = new IntersectionObserver(
        ([entry]) => setEntry(entry),
        { threshold, root, rootMargin }
      );

      observer.current.observe(node);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }
    };
  }, [node, threshold, root, rootMargin, frozen]);

  return { ref: setNode, entry, isIntersecting: !!entry?.isIntersecting };
};

