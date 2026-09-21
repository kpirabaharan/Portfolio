'use client';

import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import useSplash from '@/hooks/useSplash';
import useWindowSize from '@/hooks/useWindowSize';
import { splashInUp, topCurve } from '@/lib/animations';

const SplashIn = () => {
  const [width] = useWindowSize();
  const dimension = { width };
  const router = useRouter();
  const { url, isSplash } = useSplash();

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
        className='fixed top-0 left-0 z-40 flex h-screen w-screen cursor-wait items-center justify-center bg-brand'
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
            <svg className='pointer-events-none absolute -top-[299px] h-0 w-full fill-brand stroke-none sm:h-[300px]'>
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
