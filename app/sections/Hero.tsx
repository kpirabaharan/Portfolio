import { AnimatedText } from '@/components/AnimatedText';
import { TranslatingName } from '@/components/TranslatingName';

import { heroSubHeading } from '@/constants';

const Hero = () => {
  return (
    <>
      <div className='absolute left-4 top-24 md:top-48'>
        <AnimatedText
          className='text-center text-2xl font-light text-muted-foreground md:text-4xl lg:text-5xl xl:text-6xl'
          text={heroSubHeading}
        />
      </div>
      <div className='absolute left-0 top-0 -translate-y-[50%] -rotate-45 md:bottom-4 md:top-auto md:translate-y-0 md:rotate-0'>
        <TranslatingName />
      </div>
    </>
  );
};

export default Hero;
