'use client';

import { motion } from 'framer-motion';
import { startCase } from 'lodash';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { bottomCurve, splashOutUp } from '@/lib/animations';

import { AnimatedText } from '@/components/AnimatedText';
import useSplash from '@/hooks/useSplash';

interface SplashOutProps {
  setIsLoading: (val: boolean) => void;
}

const SplashOut = ({ setIsLoading }: SplashOutProps) => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const pathname = usePathname();
  const { closeSplash } = useSplash();

  let title = '';
  if (pathname === '/') {
    title = "Keeshigan's Portfolio";
  } else {
    const pathArray = pathname.split('/');
    title = startCase(pathArray[pathArray.length - 1]);
  }

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    closeSplash();
  }, [closeSplash]);

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
      className='fixed left-0 top-0 z-40 flex h-screen w-screen cursor-wait items-center justify-center bg-teal-800'
      initial={'initial'}
      exit={'exit'}
      variants={splashOutUp()}
    >
      {dimension.width > 0 && (
        <>
          <AnimatedText
            className='z-20 text-4xl md:text-7xl'
            text={[
              title,
              100,
              () => {
                setIsLoading(false);
              },
            ]}
          />
          {/* Bottom Curve */}
          <svg className='pointer-events-none absolute top-0 h-0 w-full fill-teal-800 stroke-none sm:h-[calc(100%+300px)]'>
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
