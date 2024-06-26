'use client';

import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { useState, type PropsWithChildren } from 'react';

import MagneticComponent from '@/hoc/MagneticComponent';

import { Button } from '@/components/ui/button';

interface MagneticButtonProps extends PropsWithChildren {
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'round' | 'filter' | 'wide';
  onClick: () => void;
}

export const MagneticButton = ({
  size = 'round',
  onClick,
  children,
}: MagneticButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonHover: Variants = {
    initial: { y: '100%' },
    enter: {
      y: 0,
      transition: { duration: 0.3, delay: 0.1 },
    },
    exit: {
      y: '-100%',
      transition: { ease: [0.11, 0, 0.5, 0], duration: 0.2, delay: 0.2 },
    },
  };

  return (
    <MagneticComponent
      className='inline-block rounded-full shadow-2xl'
      modifier={{ x: 0.2, y: 0.2 }}
    >
      <Button
        className='relative overflow-hidden'
        size={size}
        onClick={onClick}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className='pointer-events-none absolute left-0 top-0 h-full w-full rounded-full bg-teal-600'
              variants={buttonHover}
              initial={'initial'}
              animate={'enter'}
              exit={'exit'}
            />
          )}
        </AnimatePresence>
        <MagneticComponent
          className='absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full'
          modifier={{ x: 0.25, y: 0.25 }}
        >
          {children}
        </MagneticComponent>
      </Button>
    </MagneticComponent>
  );
};
