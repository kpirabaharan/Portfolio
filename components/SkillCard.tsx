'use client';

import { motion } from 'motion/react';
import Image, { type StaticImageData } from 'next/image';

import { fadeIn } from '@/lib/transitions';

interface SkillCardProps {
  name: string;
  icon: StaticImageData;
  index?: number;
}

const SkillCard = ({ name, icon, index = 0 }: SkillCardProps) => {
  return (
    <motion.div
      variants={fadeIn('up', '', 0.05 * index, 0.5)}
      className='group relative flex aspect-square flex-col items-center justify-center gap-4 overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition duration-300 hover:-translate-y-1 hover:ring-primary/40'
    >
      <div className='absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-primary/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
      <div className='relative size-10 transition-transform duration-300 group-hover:scale-110 md:size-12'>
        <Image src={icon} alt='' fill sizes='48px' className='object-contain' />
      </div>
      <p className='relative text-sm text-muted-foreground transition-colors group-hover:text-foreground'>
        {name}
      </p>
    </motion.div>
  );
};

export default SkillCard;
