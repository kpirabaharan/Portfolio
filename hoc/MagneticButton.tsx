'use client';

import { useRef, useState, PropsWithChildren, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps extends PropsWithChildren {
  className?: string;
  modifier?: { x: number; y: number };
}

const MagneticButton = ({
  children,
  className,
  modifier = { x: 1, y: 1 },
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null!);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * modifier.x;
    const y = (clientY - (top + height / 2)) * modifier.y;
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      className={className}
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 8, mass: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
