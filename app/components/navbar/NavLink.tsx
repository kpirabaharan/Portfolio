'use client';

import { motion } from 'motion/react';
import { type MouseEvent, type PropsWithChildren } from 'react';

import { textSlide } from '@/lib/animations';
import { cn, isModifiedClick } from '@/lib/utils';

import MagneticComponent from '@/hoc/MagneticComponent';

// Lit for the current page, and on hover / keyboard focus for the others.
const StatusLight = ({
  isPath,
  size,
  side,
}: {
  isPath: boolean;
  size: 'small' | 'large';
  side: 'left' | 'bottom';
}) => {
  return (
    <span
      className={cn(
        'absolute rounded-full bg-primary transition duration-300',
        isPath
          ? 'opacity-100'
          : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100',
        size === 'large' ? 'h-3 w-3' : 'h-2 w-2',
        side === 'left'
          ? size === 'large'
            ? 'bottom-1/2 -left-8 translate-y-1/2'
            : 'bottom-1/2 -left-4 translate-y-1/2'
          : 'bottom-0 left-1/2 -translate-x-1/2',
      )}
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
  /** Renders a real link (works without JS); otherwise a button. */
  href?: string;
  'aria-expanded'?: boolean;
  onClick: () => void;
}

export const NavLink = ({
  children,
  className,
  index,
  side = 'bottom',
  size = 'small',
  padding,
  isPath = false,
  href,
  'aria-expanded': ariaExpanded,
  onClick,
}: NavLinkProps) => {
  const shared = {
    custom: index,
    variants: textSlide,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    className: cn(
      'group relative block rounded-md outline-offset-4 focus-visible:outline-2 focus-visible:outline-ring',
      padding,
    ),
  };

  return (
    <MagneticComponent className={className} modifier={{ x: 0.5, y: 0.5 }}>
      {href ? (
        <motion.a
          {...shared}
          href={href}
          aria-current={isPath ? 'page' : undefined}
          onClick={(e: MouseEvent<HTMLAnchorElement>) => {
            if (isModifiedClick(e)) return;
            e.preventDefault();
            onClick();
          }}
        >
          {children}
          <StatusLight isPath={isPath} size={size} side={side} />
        </motion.a>
      ) : (
        <motion.button
          {...shared}
          type='button'
          aria-expanded={ariaExpanded}
          onClick={onClick}
        >
          {children}
          <StatusLight isPath={isPath} size={size} side={side} />
        </motion.button>
      )}
    </MagneticComponent>
  );
};
