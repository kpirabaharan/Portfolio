'use client';

import { PropsWithChildren, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import MagneticComponent from '@/hoc/MagneticComponent';

import { Button } from '@/components/ui/button';

interface MagneticButtonProps extends PropsWithChildren {
  buttonClass?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'round' | 'filter' | 'wide';
}

export const MagneticButton = ({
  buttonClass,
  size = 'round',
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
      transition: { ease: [0.11, 0, 0.5, 0], duration: 0.2, delay: 0.1 },
    },
  };

  return (
    <MagneticComponent
      className='relative rounded-full overflow-hidden'
      modifier={{ x: 0.4, y: 0.4 }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className='h-full w-full rounded-full 
        bg-teal-600 absolute top-0 left-0 pointer-events-none'
            variants={buttonHover}
            initial={'initial'}
            animate={'enter'}
            exit={'exit'}
          />
        )}
      </AnimatePresence>
      <Button
        // className={`${buttonClass}`}
        size={size}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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
