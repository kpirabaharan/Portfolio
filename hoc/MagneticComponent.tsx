'use client';

import { motion } from 'framer-motion';
import { throttle } from 'lodash';
import {
  useCallback,
  useRef,
  useState,
  type MouseEvent,
  type PropsWithChildren,
} from 'react';

interface MagneticComponentProps extends PropsWithChildren {
  className?: string;
  modifier?: { x: number; y: number };
}

const MagneticComponent = ({
  children,
  className,
  modifier = { x: 1, y: 1 },
}: MagneticComponentProps) => {
  const ref = useRef<HTMLDivElement>(null!);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Use useCallback to memoize the throttled version of mouseMove
  const mouseMove = useCallback(
    throttle((e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * modifier.x;
      const y = (clientY - (top + height / 2)) * modifier.y;
      setPosition({ x, y });
    }, 50),

    [modifier],
  ); // Adjust throttle limit as needed

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setTimeout(() => {
      setPosition({ x: 0, y: 0 });
    }, 100); // Adjust delay as needed to prevent flickering
    setTimeout(() => {
      setPosition({ x: 0, y: 0 });
    }, 200); // Adjust delay as needed to prevent flickering
    setTimeout(() => {
      setPosition({ x: 0, y: 0 });
    }, 300); // Adjust delay as needed to prevent flickering
    setTimeout(() => {
      setPosition({ x: 0, y: 0 });
    }, 500); // Adjust delay as needed to prevent flickering
  };

  const { x, y } = position;

  return (
    <motion.div
      className={className}
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 10, mass: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticComponent;
