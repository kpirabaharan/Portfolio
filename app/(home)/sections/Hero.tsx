import { Playfair_Display } from 'next/font/google';

import { heroDescriptor } from '@/constants';

import { Container } from '@/components/Container';
import { AnimatedDescriptor } from '@/components/AnimatedDescriptor';

const playfairDisplay = Playfair_Display({ weight: '600', subsets: ['latin'] });

const Hero = () => {
  return (
    <Container className='flex flex-col gap-y-4 justify-center items-center h-screen w-screen'>
      <h1 className='text-5xl font-semibold'>
        Hi, I&apos;m
        <span style={playfairDisplay.style} className='text-teal-600'>
          {' '}
          Keeshigan Pirabaharan
        </span>
      </h1>
      <AnimatedDescriptor className='text-4xl' text={heroDescriptor} />
    </Container>
  );
};

export default Hero;
