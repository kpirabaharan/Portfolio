import { type Variants } from 'framer-motion';

type delay = number;
type duration = number;
type direction = '' | 'left' | 'right' | 'up' | 'down';
type type = string;
type staggerChildren = number;
type delayChildren = number;

export const textVariant = (delay?: delay): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  };
};

export const fadeIn = (
  direction?: direction,
  type?: type,
  delay?: delay,
  duration?: duration,
): Variants => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const zoomIn = (delay?: delay, duration?: duration): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const slideIn = (
  direction?: direction,
  type?: type,
  delay?: delay,
  duration?: duration,
): Variants => {
  return {
    hidden: {
      x: direction === 'left' ? '-120%' : direction === 'right' ? '120%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren?: staggerChildren,
  delayChildren?: delayChildren,
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren: delayChildren ?? 0,
      },
    },
  };
};
