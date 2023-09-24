'use client';

import { PropsWithChildren } from 'react';
import { motion, Variants } from 'framer-motion';

import MagneticComponent from '@/hoc/MagneticComponent';

interface NavLinkProps extends PropsWithChildren {
  className?: string;
  index?: number;
  side?: 'left' | 'bottom';
  size?: 'small' | 'large';
  isActive?: boolean;
}

export const NavLink = ({
  children,
  className,
  index,
  side = 'bottom',
  size = 'small',
  isActive,
}: NavLinkProps) => {
  const textSlide: Variants = {
    initial: { x: '80px' },
    enter: (i) => ({
      x: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 * i },
    }),
    exit: (i) => ({
      x: '100px',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    }),
  };

  return (
    <MagneticComponent className={className} modifier={{ x: 0.25, y: 0.25 }}>
      <motion.div
        custom={index}
        variants={textSlide}
        initial='initial'
        animate='enter'
        exit='exit'
        className={'group relative p-0'}
      >
        {children}
        <div
          className={`group-hover:opacity-100 ${
            isActive ? 'opacity-100' : 'opacity-0'
          } ${size === 'large' ? 'w-3 h-3' : 'w-2 h-2'} bg-white 
          absolute ${
            side === 'left'
              ? size === 'large'
                ? '-left-8 bottom-1/2 translate-y-1/2'
                : '-left-6 bottom-1/2 translate-y-1/2'
              : '-bottom-2 left-1/2 -translate-x-1/2'
          } 
        rounded-full transition duration-300`}
        />
      </motion.div>
    </MagneticComponent>
  );
};
