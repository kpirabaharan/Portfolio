'use client';

import { motion } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';

import { techStack } from '@/constants';
import { styles } from '@/lib/styles';
import { fadeIn } from '@/lib/transitions';
import TechIcon from './TechIcon';

const Skills = () => {
  return (
    <div className='mt-8 flex h-full flex-col gap-y-8 text-center'>
      {techStack.map((stack, index) => (
        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeIn('', '', 0.1, 1)}
          className='flex flex-col items-center gap-y-4'
          key={index}
        >
          <h2 className={styles.skillsHead}>{stack.title}</h2>
          <p className='max-w-3xl text-sm sm:text-base lg:text-lg'>{stack.description}</p>
          <div className='flex w-full flex-row flex-wrap items-center justify-center justify-items-center gap-4'>
            {stack.tech.map((skill, index) => (
              <div
                key={index}
                className='relative flex h-24 w-24 flex-col items-center lg:h-36 lg:w-32'
              >
                <div className='flex h-[80%] w-full items-center justify-center'>
                  <TechIcon skill={skill} />
                </div>
                {skill.expertise && (
                  <div className='absolute right-0 top-0'>
                    <AiFillStar className='h-6 w-6 text-yellow-500' />
                  </div>
                )}
                <p className='h-[20%] text-sm sm:text-base lg:text-lg leading-5'>{skill.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
