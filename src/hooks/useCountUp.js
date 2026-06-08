import { useState, useEffect, useRef } from 'react';

/**
 * Counts up from 0 to `end` over `duration` ms when the element enters viewport.
 * Returns [ref, displayValue] — attach ref to the container element.
 */
export function useCountUp(end, duration = 1800, suffix = '') {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // Parse numeric part and suffix from strings like "150+" or "100%"
  const numericEnd = parseInt(String(end).replace(/[^0-9]/g, ''), 10);
  const autoSuffix = String(end).replace(/[0-9]/g, '') || suffix;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.85 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericEnd));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(numericEnd);
    };
    requestAnimationFrame(step);
  }, [started, numericEnd, duration]);

  return [ref, `${count}${autoSuffix}`];
}
