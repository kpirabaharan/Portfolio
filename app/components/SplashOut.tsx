'use client';

import { startCase } from 'lodash';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { bottomCurve, splashOutUp } from '@/lib/animations';

import { AnimatedText } from '@/components/AnimatedText';
import useSplash from '@/hooks/useSplash';
import useWindowSize from '@/hooks/useWindowSize';

interface SplashOutProps {
  setIsLoading: (val: boolean) => void;
}

const SplashOut = ({ setIsLoading }: SplashOutProps) => {
  const [width, height] = useWindowSize();
  const dimension = { width, height };
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
      className='fixed top-0 left-0 z-40 flex h-screen w-screen cursor-wait items-center justify-center bg-brand'
      initial={'initial'}
      exit={'exit'}
      variants={splashOutUp()}
    >
      {dimension.width > 0 && (
        <>
          <AnimatedText
            className='z-20 text-4xl font-medium tracking-tight text-brand-foreground md:text-7xl'
            text={[
              title,
              100,
              () => {
                setIsLoading(false);
              },
            ]}
          />
          {/* Bottom Curve */}
          <svg className='pointer-events-none absolute top-0 h-0 w-full fill-brand stroke-none sm:h-[calc(100%+300px)]'>
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
