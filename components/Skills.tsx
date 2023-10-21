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
    <div className='h-full mt-8 text-center flex flex-col gap-y-8'>
      {gl
        ? techStack.map((stack, index) => (
            <div className='flex flex-col gap-y-4 items-center' key={index}>
              <p className='max-w-3xl'>{stack.description}</p>
              <BallOrbit techStack={stack} />
            </div>
          ))
        : techStack.map((stack, index) => (
            <div className='flex flex-col gap-y-4 items-center' key={index}>
              <h2 className={styles.skillsHead}>{stack.title}</h2>
              <p className='max-w-3xl'>{stack.description}</p>
              <div
                className='w-full flex flex-row flex-wrap gap-4 items-center 
                justify-items-center justify-center'
              >
                {stack.tech.map((skill, index) => (
                  <div
                    key={index}
                    className='w-24 h-24 lg:w-32 lg:h-36 flex flex-col items-center 
                relative'
                  >
                    <div className='w-full h-[80%] flex items-center justify-center'>
                      <TechIcon skill={skill} />
                    </div>
                    {skill.expertise && (
                      <div className='absolute top-0 right-0'>
                        <AiFillStar className='h-6 w-6 text-yellow-500' />
                      </div>
                    )}
                    <p className='text-lg h-[20%] leading-5'>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
    </div>
  );
};

export default Skills;
