import { useState, useEffect } from 'react';

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const listener = (ev: MouseEvent) => {
      setMousePosition({ x: ev.pageX, y: ev.pageY });
    };

    window.addEventListener('mousemove', listener);
    return () => window.removeEventListener('mousemove', listener);
  }, [mousePosition]);

  return mousePosition;
};
