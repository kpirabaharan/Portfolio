'use client';

import { motion, useSpring } from 'motion/react';
import { useRef, type PointerEvent, type PropsWithChildren } from 'react';

const spring = { stiffness: 150, damping: 10, mass: 1 };

interface MagneticComponentProps extends PropsWithChildren {
  className?: string;
  modifier?: { x: number; y: number };
}

// Pulls its children toward the cursor. Motion values update outside React,
// so hovering doesn't re-render the tree.
const MagneticComponent = ({
  children,
  className,
  modifier = { x: 1, y: 1 },
}: MagneticComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    // Touch taps would otherwise leave the element stuck off-centre.
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    x.set((e.clientX - (left + width / 2)) * modifier.x);
    y.set((e.clientY - (top + height / 2)) * modifier.y);
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </motion.div>
  );
};

export default MagneticComponent;
