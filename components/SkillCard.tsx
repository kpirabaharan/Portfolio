'use client';

import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useState } from 'react';

import Image from 'next/image';
import { CanvasRevealEffect } from './ui/canvas-reveal-effect';

interface SkillCardProps {
  name: string;
  icon: {
    src: string;
  };
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const animate = isHovered ? 'active' : 'inactive';

  const variants: Variants = {
    inactive: {
      translateX: '-50%',
      translateY: '-50%',
      scale: 1,
    },
    active: {
      translateY: '-75%',
      scale: 1.1,
    },
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='relative mx-auto h-36 w-1/2 overflow-hidden border border-slate-800 bg-background sm:w-1/3 xl:w-1/6'
    >
      <motion.div
        initial={'inactive'}
        animate={animate}
        variants={variants}
        className='absolute left-1/2 top-1/2 z-10 h-12 w-12'
      >
        <Image className='object-contain' src={icon.src} alt={name} fill />
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8, transition: { delay: 0.1 } }}
            exit={{ opacity: 0 }}
            className='absolute left-1/2 top-2/3 z-10 -translate-x-1/2 -translate-y-1/3 text-base'
          >
            {name}
          </motion.p>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='absolute inset-0 h-full w-full'
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName='bg-transparent'
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className='absolute inset-0 bg-black/50 [mask-image:radial-gradient(200px_at_center,white,transparent)] dark:bg-black/90' />
    </div>
  );
};

export default SkillCard;
