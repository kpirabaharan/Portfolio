'use client';

import { AnimatedText } from '@/components/AnimatedText';

interface SplashProps {
  setIsLoading: (val: boolean) => void;
}

const Splash = ({ setIsLoading }: SplashProps) => {
  return (
    <AnimatedText
      className='text-7xl'
      text={["Keeshigan's Portfolio", 500, () => setIsLoading(false)]}
    />
  );
};

export default Splash;
