'use client';

import { useState, useRef } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';

import { techStack } from '@/constants';

import BallCanvas from '@/components/canvas/Ball';
import SkillCard from '@/components/SkillCard';

const Skills = () => {
  const [techBalls, setTechBalls] = useState(techStack[0]);
  const ref = useRef<HTMLDivElement>(null);

  const variants = (delay: number): Variants => {
    return {
      initial: { x: -1 * (ref.current?.clientWidth || 1) },
      animate: {
        x: 0,
        transition: { duration: 0.7, delay, ease: [0.76, 0, 0.24, 1] },
      },
      exit: {
        x: ref.current?.clientWidth || 1,
        transition: { duration: 0.7, delay, ease: [0.76, 0, 0.24, 1] },
      },
    };
  };

  return (
    <div className='h-full flex flex-col'>
      <div className='flex lg:flex-row flex-col gap-x-4 h-full mt-8 lg:mt-0'>
        <div className='hidden lg:flex flex-col gap-y-8 h-full justify-evenly'>
          {techStack.map(
            (tech, index) =>
              index % 2 === 0 && (
                <SkillCard
                  key={index}
                  name={tech.title}
                  isActive={techBalls.title === tech.title}
                  onClick={() => setTechBalls(tech)}
                />
              ),
          )}
        </div>
        {/* Mobile */}
        <div
          className='lg:hidden grid grid-cols-3 h-full w-full
          items-center justify-items-center justify-center gap-y-8'
        >
          {techStack.map((tech, index) => (
            <SkillCard
              key={index}
              name={tech.title}
              isActive={techBalls.title === tech.title}
              onClick={() => setTechBalls(tech)}
            />
          ))}
        </div>
        <div
          ref={ref}
          className='h-full w-full flex justify-center items-center mt-8 lg:mt-0 
          overflow-hidden'
        >
          <div className='flex flex-wrap items-center justify-center gap-8'>
            <AnimatePresence mode='wait'>
              {techBalls.tech.map((skill, index) => (
                <motion.div
                  initial={'initial'}
                  animate={'animate'}
                  exit={'exit'}
                  variants={variants(
                    (techBalls.tech.length - index + 1) * 0.05,
                  )}
                  className='w-24 h-36 lg:w-32 lg:h-40 flex flex-col items-center 
                  relative text-center'
                  key={skill.name}
                >
                  <div className='w-24 h-24 lg:h-32 lg:w-32'>
                    <BallCanvas icon={skill.icon.src} />
                  </div>
                  <p className='text-base md:text-lg'>{skill.name}</p>
                  {skill.expertise && (
                    <div className='absolute top-0 right-0'>
                      <AiFillStar className='h-6 w-6 lg:h-8 lg:w-8 text-yellow-500' />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className='hidden lg:flex flex-col gap-y-8 h-full justify-evenly'>
          {techStack.map(
            (tech, index) =>
              index % 2 === 1 && (
                <SkillCard
                  key={index}
                  name={tech.title}
                  isActive={techBalls.title === tech.title}
                  onClick={() => setTechBalls(tech)}
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
