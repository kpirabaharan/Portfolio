'use client';

import { PropsWithChildren, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

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
      className='inline-block rounded-full'
      modifier={{ x: 0.4, y: 0.4 }}
    >
      <Button
        className='relative overflow-hidden'
        size={size}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className='h-full w-full rounded-full bg-teal-600 absolute top-0 
              left-0 pointer-events-none'
              variants={buttonHover}
              initial={'initial'}
              animate={'enter'}
              exit={'exit'}
            />
          )}
        </AnimatePresence>
        <MagneticComponent
          className='absolute left-0 top-0 w-full h-full rounded-full
          flex items-center justify-center'
          modifier={{ x: 0.3, y: 0.3 }}
        >
          {children}
        </MagneticComponent>
      </Button>
    </MagneticComponent>
  );
};
