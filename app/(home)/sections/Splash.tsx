'use client';

import { AnimatedText } from '@/components/AnimatedText';

interface SplashProps {
  setIsLoading: (val: boolean) => void;
}

const Splash = ({ setIsLoading }: SplashProps) => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <AnimatedText
        className='text-7xl'
        text={["Keeshigan's Portfolio", 500, () => setIsLoading(false)]}
      />
    </div>
  );
};

export default Splash;
