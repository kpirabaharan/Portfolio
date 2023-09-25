'use client';

import { useState, useEffect } from 'react';
import { Variants, motion } from 'framer-motion';

import { AnimatedText } from '@/components/AnimatedText';

interface SplashProps {
  setIsLoading: (val: boolean) => void;
}

const Splash = ({ setIsLoading }: SplashProps) => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const slideUp: Variants = {
    initial: {
      y: 0,
    },
    exit: {
      y: '-100vh',
      transition: { ease: [0.76, 0, 0.24, 1], duration: 0.8 },
    },
  };

  const curve: Variants = {
    initial: {
      d: initialPath,
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <motion.div
      className='h-screen w-screen cursor-wait fixed top-0 left-0 z-10
      flex justify-center items-center bg-background'
      initial={'initial'}
      exit={'exit'}
      variants={slideUp}
    >
      {dimension.width > 0 && (
        <>
          <AnimatedText
            className='text-4xl md:text-7xl z-20'
            text={["Keeshigan's Portfolio", 500, () => setIsLoading(false)]}
          />
          <svg
            className='absolute top-0 w-full h-[calc(100%+300px)] stroke-none 
            fill-slate-950 pointer-events-none'
          >
            <motion.path variants={curve} initial='initial' exit='exit' />
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Splash;
