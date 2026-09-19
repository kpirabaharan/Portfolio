'use client';

import { motion } from 'motion/react';

import { textVariant } from '@/lib/transitions';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  index: string;
  title: string;
  className?: string;
}

export const SectionHeading = ({
  index,
  title,
  className,
}: SectionHeadingProps) => (
  <motion.div
    variants={textVariant()}
    className={cn('flex flex-col gap-3', className)}
  >
    <div className='flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-primary'>
      <span>{index}</span>
      <span className='h-px w-10 bg-primary/50' />
    </div>
    <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl'>
      {title}
    </h2>
  </motion.div>
);
