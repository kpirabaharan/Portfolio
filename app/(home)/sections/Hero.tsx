import { Location } from '@/components/Location';
import { AnimatedText } from '@/components/AnimatedText';
import { TranslatingName } from '@/components/TranslatingName';

import { heroSubHeading } from '@/constants';

const Hero = () => {
  return (
    <div
      className='flex flex-col gap-y-4 justify-center items-center h-[calc(100vh-80px)] 
      text-muted-foreground'
    >
      <div className='absolute left-0 top-1/4 md:top-1/2 md:-translate-y-1/2'>
        <Location />
      </div>
      <div className='absolute right-4 bottom-24 md:bottom-auto md:top-1/2 md:-translate-y-1/2'>
        <AnimatedText
          className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-center'
          text={heroSubHeading}
        />
      </div>
      <div
        className='absolute top-0 left-0 -translate-y-[50%] md:top-auto md:bottom-4
        md:translate-y-0 -rotate-45 md:rotate-0'
      >
        <TranslatingName />
      </div>
    </div>
  );
};

export default Hero;
