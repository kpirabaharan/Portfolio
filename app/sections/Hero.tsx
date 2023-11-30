import { Location } from '@/components/Location';
import { AnimatedText } from '@/components/AnimatedText';
import { TranslatingName } from '@/components/TranslatingName';

import { heroSubHeading } from '@/constants';

const Hero = () => {
  return (
    <>
      <div className='absolute left-0 top-1/4 md:top-1/2 md:-translate-y-1/2'>
        <Location />
      </div>
      <div className='absolute bottom-24 right-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2'>
        <AnimatedText
          className='text-center text-2xl font-light text-muted-foreground md:text-3xl lg:text-4xl 
          xl:text-5xl'
          text={heroSubHeading}
        />
      </div>
      <div
        className='absolute left-0 top-0 -translate-y-[50%] -rotate-45 md:bottom-4
        md:top-auto md:translate-y-0 md:rotate-0'
      >
        <TranslatingName />
      </div>
    </>
  );
};

export default Hero;
