// 'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';

const FancyButton = () => {
  const [isHovered, setIsHovered] = useState<'initial' | 'animate' | 'exit'>(
    'initial',
  );

  const variants = {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0 },
    exit: { y: '-100%', opacity: 0 },
  };

  const transition = {
    duration: 0.25,
    delay: 0.1,
  };

  return (
    <Button
      size={'floating'}
      className='overflow-hidden relative'
      onMouseEnter={() => setIsHovered('animate')}
      onMouseLeave={() => {
        setIsHovered('exit');
        setTimeout(() => setIsHovered('initial'), 500);
      }}
    >
      <motion.div
        className='absolute w-full h-full rounded-full bg-slate-500 pointer-events-none z-10'
        variants={variants}
        animate={isHovered}
        transition={transition}
      />
      <Menu className='h-6 w-6 md:h-8 md:w-8 pointer-events-none z-20' />
    </Button>
  );
};

export default FancyButton;
