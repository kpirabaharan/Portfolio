'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import { slideUp, topCurve, bottomCurve } from '@/lib/animations';

import { AnimatedText } from '@/components/AnimatedText';

interface SplashProps {
  setIsLoading: (val: boolean) => void;
}

const Splash = ({ setIsLoading }: SplashProps) => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const pathname = usePathname();
  var title: string;

  switch (pathname) {
    case '/about':
      title = 'About';
      break;
    case '/projects':
      title = 'Projects';
      break;
    case '/contact':
      title = 'Contact';
      break;
    default:
      title = "Keeshigan's Portfolio";
  }

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const topInitialPath = `M0 300 L${dimension.width} 300 Q${
    dimension.width / 2
  } 300 0 300`;
  const topTargetPath = `M0 300 L${dimension.width} 300 Q${
    dimension.width / 2
  } 0 0 300`;

  const bottomInitialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  } L0 0`;
  const bottomTargetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  return (
    <motion.div
      className='h-screen w-screen cursor-wait fixed top-0 left-0 z-10
      flex justify-center items-center bg-transparent'
      initial={'initial'}
      animate={'enter'}
      exit={'exit'}
      variants={pathname === '/' ? slideUp(true) : slideUp(false)}
    >
      {dimension.width > 0 && (
        <>
          <AnimatedText
            className='text-4xl md:text-7xl z-20'
            text={[title, 500, () => setIsLoading(false)]}
          />
          {/* Top Curve */}
          {pathname !== '/' && (
            <svg
              className='absolute -top-[299px] w-full h-[300px] stroke-none 
            fill-teal-800 pointer-events-none'
            >
              <motion.path
                variants={topCurve(topInitialPath, topTargetPath)}
                initial='initial'
                animate='enter'
              />
            </svg>
          )}
          {/* Bottom Curve */}
          <svg
            className='absolute top-0 w-full h-[calc(100%+300px)] stroke-none 
            fill-teal-800 pointer-events-none'
          >
            <motion.path
              variants={bottomCurve(bottomInitialPath, bottomTargetPath)}
              initial='initial'
              exit='exit'
            />
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Splash;
