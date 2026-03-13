import { useEffect, useRef } from 'react';

/**
 * Custom hook that returns a ref and inView flag using IntersectionObserver.
 * Used as a lightweight alternative to heavy scroll-animation libraries.
 * Components use framer-motion's `animate` prop driven by this flag.
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute('data-inview', 'true');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
