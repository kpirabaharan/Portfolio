'use client';

import { motion } from 'motion/react';

import SectionWrapper from '@/hoc/SectionWrapper';
import useSplash from '@/hooks/useSplash';
import { fadeIn } from '@/lib/transitions';

import { MagneticButton } from '@/components/MagneticButton';
import { SectionHeading } from '@/components/SectionHeading';
import SkillCard from '@/components/SkillCard';

import { featuredSkillsText, featuredTech } from '@/constants';

const Skills = () => {
  const { startSplash } = useSplash();

  return (
    <>
      <SectionHeading index='05' title='Leading Skills' />
      <div className='mt-10 flex flex-col gap-10'>
        <div className='flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between'>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg'
          >
            {featuredSkillsText}
          </motion.p>
          <div className='flex justify-center lg:shrink-0'>
            <MagneticButton
              size='round'
              onClick={() => startSplash('/skills')}
              className='hidden lg:inline-flex'
            >
              More Skills
            </MagneticButton>
            <MagneticButton
              size='wide'
              onClick={() => startSplash('/skills')}
              className='lg:hidden'
            >
              More Skills
            </MagneticButton>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-6'>
          {featuredTech.map(({ name, icon }, i) => (
            <SkillCard key={name} name={name} icon={icon} index={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, 'skills');
