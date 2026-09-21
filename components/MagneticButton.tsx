'use client';

import { AnimatePresence, motion, type Variants } from 'motion/react';
import { useState, type PropsWithChildren } from 'react';

import MagneticComponent from '@/hoc/MagneticComponent';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

const fill: Variants = {
  initial: { y: '100%' },
  enter: { y: 0, transition: { duration: 0.3, delay: 0.1 } },
  exit: {
    y: '-100%',
    transition: { ease: [0.11, 0, 0.5, 0], duration: 0.2, delay: 0.2 },
  },
};

interface MagneticButtonProps extends PropsWithChildren {
  size?: 'round' | 'wide';
  className?: string;
  /** External link; renders an anchor instead of a button. */
  href?: string;
  onClick?: () => void;
}

export const MagneticButton = ({
  size = 'round',
  className,
  href,
  onClick,
  children,
}: MagneticButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <>
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className='pointer-events-none absolute inset-0 rounded-full bg-brand'
            variants={fill}
            initial='initial'
            animate='enter'
            exit='exit'
          />
        )}
      </AnimatePresence>
      <MagneticComponent
        className='absolute inset-0 flex items-center justify-center gap-2 rounded-full'
        modifier={{ x: 0.25, y: 0.25 }}
      >
        {children}
      </MagneticComponent>
    </>
  );

  return (
    <MagneticComponent
      className='inline-block rounded-full'
      modifier={{ x: 0.2, y: 0.2 }}
    >
      <Button
        className={cn(
          'relative overflow-hidden bg-foreground text-lg text-background shadow-2xl transition-colors duration-300 hover:bg-foreground lg:text-xl',
          isHovered && 'text-brand-foreground',
          className,
        )}
        size={size}
        asChild={Boolean(href)}
        onClick={onClick}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        {href ? (
          <a href={href} target='_blank' rel='noreferrer'>
            {content}
          </a>
        ) : (
          content
        )}
      </Button>
    </MagneticComponent>
  );
};
