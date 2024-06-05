'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren, useState } from 'react';

import { textSlide } from '@/lib/animations';

import MagneticComponent from '@/hoc/MagneticComponent';

const StatusLight = ({
  isActive,
  size,
  side,
}: {
  isActive: boolean;
  size: 'small' | 'large';
  side: 'left' | 'bottom';
}) => {
  return (
    <div
      className={`${isActive ? 'opacity-100' : 'opacity-0'} ${
        size === 'large' ? 'h-3 w-3' : 'h-2 w-2'
      } absolute bg-white ${
        side === 'left'
          ? size === 'large'
            ? '-left-8 bottom-1/2 translate-y-1/2'
            : '-left-4 bottom-1/2 translate-y-1/2'
          : 'bottom-0 left-1/2 -translate-x-1/2'
      } rounded-full transition duration-300`}
    />
  );
};

interface NavLinkProps extends PropsWithChildren {
  className?: string;
  index?: number;
  side?: 'left' | 'bottom';
  size?: 'small' | 'large';
  padding?: string;
  isPath?: boolean;
  onClick: () => void;
}

export const NavLink = ({
  children,
  className,
  index,
  side = 'bottom',
  size = 'small',
  padding,
  isPath,
  onClick,
}: NavLinkProps) => {
  const [isActive, setIsActive] = useState(isPath);

  return (
    <MagneticComponent className={className} modifier={{ x: 0.3, y: 0.3 }}>
      <motion.div
        custom={index}
        variants={textSlide}
        initial='initial'
        animate='enter'
        exit='exit'
        onClick={onClick}
        className={`relative ${padding}`}
        onMouseEnter={!isPath ? () => setIsActive(true) : () => {}}
        onMouseLeave={!isPath ? () => setIsActive(false) : () => {}}
      >
        {children}
        <StatusLight isActive={isActive ?? false} size={size} side={side} />
      </motion.div>
    </MagneticComponent>
  );
};
