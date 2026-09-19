'use client';

import { motion } from 'motion/react';

import SectionWrapper from '@/hoc/SectionWrapper';
import { fadeIn } from '@/lib/transitions';

import { SectionHeading } from '@/components/SectionHeading';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { me } from '@/assets';

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className='font-medium text-foreground'>{children}</span>
);

const About = () => {
  return (
    <>
      <SectionHeading index='01' title='About Me' />
      <div className='mt-10 flex flex-col-reverse gap-10 md:flex-row md:items-center'>
        <div className='flex-3 space-y-6'>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl md:leading-9'
          >
            I&apos;m <Highlight>Keeshigan Pirabaharan</Highlight>, a{' '}
            <Highlight>Mechatronics/Software Engineer</Highlight> with a track
            record of crafting <Highlight>innovative</Highlight> solutions that
            seamlessly blend Frontend and Backend technologies. I possess a
            strong aptitude for <Highlight>rapid learning</Highlight> and a
            genuine enthusiasm for adopting{' '}
            <Highlight>new technologies</Highlight> to engineer efficient and{' '}
            <Highlight>scalable solutions</Highlight> that address real-world
            challenges.
          </motion.p>
          <motion.p
            variants={fadeIn('', '', 0.2, 1)}
            className='max-w-3xl text-lg text-primary md:text-xl lg:text-2xl'
          >
            I am actively seeking opportunities in software development.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn('', '', 0.2, 1)}
          className='flex flex-2 justify-center'
        >
          <div className='relative'>
            <div className='absolute -inset-4 rounded-full bg-primary/20 blur-2xl' />
            <Avatar className='relative size-48 ring-1 ring-primary/40 ring-offset-4 ring-offset-background lg:size-60'>
              <AvatarImage src={me.src} alt='Keeshigan Pirabaharan' />
              <AvatarFallback className='text-4xl'>KP</AvatarFallback>
            </Avatar>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
