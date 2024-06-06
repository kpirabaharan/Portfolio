'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import useSplash from '@/hooks/useSplash';
import { splashInUp, topCurve } from '@/lib/animations';

const SplashIn = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const router = useRouter();
  const { url, isSplash } = useSplash();

  useEffect(() => {
    if (url) router.prefetch(url);
    setDimension({ width: window.innerWidth, height: window.innerHeight });
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
        className='fixed left-0 top-0 z-40 flex h-screen w-screen cursor-wait items-center justify-center bg-teal-800'
        initial={'initial'}
        animate={'enter'}
        variants={splashInUp()}
        onAnimationComplete={() => {
          router.push(url!);
        }}
      >
        {dimension.width > 0 && (
          <>
            {/* Top Curve */}
            <svg className='pointer-events-none absolute -top-[299px] h-0 w-full fill-teal-800 stroke-none sm:h-[300px]'>
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
