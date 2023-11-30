'use client';

import { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';

import { styles } from '@/lib/styles';

import TechIcon from '@/components/TechIcon';

import { techStack } from '@/constants';
import BallOrbit from '@/components/canvas/BallOrbit';

const Skills = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const canvas = document.createElement('canvas');
  let gl: WebGLRenderingContext | null;
  try {
    gl =
      (canvas.getContext('webgl') as WebGLRenderingContext) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext);
  } catch (err) {
    gl = null;
  }
  return (
    <div className='mt-8 flex h-full flex-col gap-y-8 text-center'>
      {gl
        ? techStack.map((stack, index) => (
            <div className='flex flex-col items-center gap-y-4' key={index}>
              <p className='max-w-3xl'>{stack.description}</p>
              <BallOrbit techStack={stack} />
            </div>
          ))
        : techStack.map((stack, index) => (
            <div className='flex flex-col items-center gap-y-4' key={index}>
              <h2 className={styles.skillsHead}>{stack.title}</h2>
              <p className='max-w-3xl'>{stack.description}</p>
              <div
                className='flex w-full flex-row flex-wrap items-center justify-center 
                justify-items-center gap-4'
              >
                {stack.tech.map((skill, index) => (
                  <div
                    key={index}
                    className='relative flex h-24 w-24 flex-col items-center lg:h-36 
                lg:w-32'
                  >
                    <div className='flex h-[80%] w-full items-center justify-center'>
                      <TechIcon skill={skill} />
                    </div>
                    {skill.expertise && (
                      <div className='absolute right-0 top-0'>
                        <AiFillStar className='h-6 w-6 text-yellow-500' />
                      </div>
                    )}
                    <p className='h-[20%] text-lg leading-5'>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
    </div>
  );
};

export default Skills;
