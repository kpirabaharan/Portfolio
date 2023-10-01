'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import { splashInUp, topCurve } from '@/lib/animations';
import useSplash from '@/hooks/useSplash';

const SplashIn = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const router = useRouter();
  const { url, isSplash } = useSplash();

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (url) router.prefetch(url);
  }, [router, url]);

  const topInitialPath = `M0 300 L${dimension.width} 300 Q${
    dimension.width / 2
  } 300 0 300`;
  const topTargetPath = `M0 300 L${dimension.width} 300 Q${
    dimension.width / 2
  } 0 0 300`;

  return (
    isSplash && (
      <motion.div
        className='h-screen w-screen cursor-wait fixed top-0 left-0 z-40
        flex justify-center items-center bg-teal-800'
        initial={'initial'}
        animate={'enter'}
        variants={splashInUp()}
        onAnimationComplete={() => router.push(url!)}
      >
        {dimension.width > 0 && (
          <>
            {/* Top Curve */}
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
          </>
        )}
      </motion.div>
    )
  );
};

export default SplashIn;
