import { Bebas_Neue } from 'next/font/google';

import { heroSubHeading } from '@/constants';

import { Container } from '@/components/Container';
import { AnimatedText } from '@/components/AnimatedText';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

const Hero = () => {
  return (
    <Container
      className='flex flex-col gap-y-4 justify-center items-center h-screen'
    >
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold'>
        Hi, I&apos;m
        <span
          style={bebasNeue.style}
          className='text-teal-600 text-5xl sm:text-6xl md:text-7xl lg:text-8xl'
        >
          {' '}
          Keeshigan Pirabaharan
        </span>
      </h1>
      <AnimatedText
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'
        text={heroSubHeading}
      />
    </Container>
  );
};

export default Hero;
