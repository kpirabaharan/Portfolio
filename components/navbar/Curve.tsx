'use client';

import { Variants, motion } from 'framer-motion';

export const Curve = () => {
  const initialPath = `M200 0 L200 ${window.innerHeight} Q-200 ${
    window.innerHeight / 2
  } 200 0`;

  const targetPath = `M200 0 L200 ${window.innerHeight} Q200 ${
    window.innerHeight / 2
  } 200 0`;

  const pathAnimation: Variants = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg
      className='absolute top-0 -left-[199px] w-[200px] h-full 
      stroke-none fill-slate-900'
    >
      <motion.path
        variants={pathAnimation}
        initial='initial'
        animate='enter'
        exit='exit'
      />
    </svg>
  );
};
