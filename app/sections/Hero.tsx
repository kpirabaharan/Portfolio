import { BackgroundGrid } from '@/components/BackgroundGrid';
import { SceneObject } from '@/components/three/SceneObject';
import { TranslatingName } from '@/components/TranslatingName';
import { Typewriter } from '@/components/Typewriter';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';

import StandingNavbar from '@/app/components/navbar/StandingNavbar';

import { heroSubHeading } from '@/constants';

const Hero = () => {
  return (
    <section className='relative h-svh min-h-[560px] w-full overflow-hidden'>
      <BackgroundGrid />
      <SceneObject variant='hero' className='absolute inset-0' />

      <div className='relative z-10 flex h-full flex-col'>
        <StandingNavbar />

        <div className={cn(styles.container, 'mt-[10vh] md:mt-[16vh]')}>
          <h1 className='sr-only'>Keeshigan Pirabaharan — Software Engineer</h1>
          <p className='flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-primary uppercase'>
            <span className='size-1.5 rounded-full bg-primary shadow-[0_0_12px] shadow-primary' />
            Toronto, ON
          </p>
          <Typewriter
            className='mt-6 block min-h-[2.4em] max-w-xl text-4xl font-medium tracking-tight md:text-5xl xl:text-6xl'
            sequence={heroSubHeading}
          />
        </div>

        <div className='mt-auto pb-4'>
          <TranslatingName />
        </div>
      </div>
    </section>
  );
};

export default Hero;
