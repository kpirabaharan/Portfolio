import { Bebas_Neue } from 'next/font/google';

import { heroSubHeading } from '@/constants';

import { Container } from '@/components/Container';
import { AnimatedText } from '@/components/AnimatedText';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

const Hero = () => {
  return (
    <Container
      className='flex flex-col gap-y-4 justify-center items-center h-screen
      w-screen'
    >
      <h1 className='text-5xl font-semibold'>
        Hi, I&apos;m
        <span style={bebasNeue.style} className='text-teal-600 text-6xl'>
          {' '}
          Keeshigan Pirabaharan
        </span>
      </h1>
      <AnimatedText className='text-4xl' text={heroSubHeading} />
    </Container>
  );
};

export default Hero;
