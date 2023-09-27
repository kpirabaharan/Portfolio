'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import { splashOutUp, bottomCurve } from '@/lib/animations';

import { AnimatedText } from '@/components/AnimatedText';
import useSplash from '@/hooks/useSplash';

interface SplashOutProps {
  setIsLoading: (val: boolean) => void;
}

const SplashOut = ({ setIsLoading }: SplashOutProps) => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const pathname = usePathname();
  const { closeSplash } = useSplash();
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
    closeSplash();
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      className='h-screen w-screen cursor-wait fixed top-0 left-0 z-40
      flex justify-center items-center bg-teal-800'
      initial={'initial'}
      exit={'exit'}
      variants={splashOutUp()}
    >
      {dimension.width > 0 && (
        <>
          <AnimatedText
            className='text-4xl md:text-7xl z-20'
            text={[title, 100, () => setIsLoading(false)]}
          />
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

export default SplashOut;
