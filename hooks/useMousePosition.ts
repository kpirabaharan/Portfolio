import { useState, useEffect } from 'react';

export const useMousePosition = (debounce: number) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const listener = (ev: MouseEvent) => {
      setTimeout(
        () => setMousePosition({ x: ev.pageX, y: ev.pageY }),
        debounce,
      );
    };

    window.addEventListener('mousemove', listener);
    return () => window.removeEventListener('mousemove', listener);
  }, [mousePosition, debounce]);

  return mousePosition;
};
