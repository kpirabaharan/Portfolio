import { Variants } from 'framer-motion';

//Splash
export const splashInUp = () => {
  return {
    initial: {
      y: '100vh',
    },
    enter: {
      y: 0,
      transition: { ease: [0.76, 0, 0.24, 1], duration: 0.5 },
    },
  };
};

export const splashOutUp = () => {
  return {
    initial: {
      y: 0,
    },
    exit: {
      y: '-100vh',
      transition: { ease: [0.76, 0, 0.24, 1], duration: 0.5 },
    },
  };
};

export const topCurve = (initialPath: string, targetPath: string) => {
  return {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

export const bottomCurve = (initialPath: string, targetPath: string) => {
  return {
    initial: {
      d: initialPath,
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };
};

//NavLink
export const textSlide: Variants = {
  initial: { x: '80px' },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 * i },
  }),
  exit: {
    x: '100px',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

// NavModal Variants
export const pathAnimation = (initialPath: string, targetPath: string) => {
  return {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

export const menuSlide: Variants = {
  initial: { x: 'calc(100% + 200px)' },
  enter: { x: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.8 } },
  exit: {
    x: 'calc(100% + 200px)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const widthVariants: Variants = {
  xl: {
    width: 700,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  lg: {
    width: 500,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  base: {
    width: 400,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};

export const heightVariants: Variants = {
  xl: {
    height: '80%',
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  lg: {
    height: '70%',
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  base: {
    height: '50%',
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};

export const linkVariants = (width: number) => {
  const fontS = width > 1280 ? '4rem' : width > 1024 ? '3rem' : '2rem';

  return {
    initial: { fontSize: fontS },
    xl: {
      fontSize: fontS,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    lg: {
      fontSize: fontS,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    base: {
      fontSize: fontS,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };
};
