import { useState } from 'react';

import { techStack } from '@/constants';

import BallCanvas from '@/components/canvas/Ball';
import SkillCard from '@/components/SkillCard';

const Skills = () => {
  const [techBalls, setTechBalls] = useState(techStack[0]);

  return (
    <div className='h-full flex flex-col'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
        Technology Stack
      </h1>
      <div className='flex md:flex-row flex-col gap-x-4 h-full mt-8 md:mt-0'>
        <div className='hidden md:flex flex-col gap-y-8 h-full justify-evenly'>
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
        <div
          className='md:hidden grid grid-cols-2 sm:grid-cols-3 h-full w-full
          items-center justify-items-center gap-y-4'
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
        <div className='h-full w-full flex justify-center items-center mt-8 md:mt-0'>
          <div className='flex flex-wrap items-center justify-center gap-8'>
            {techBalls.tech.map((skill) => (
              <div
                className='w-32 h-32 lg:h-40 flex flex-col items-center'
                key={skill.name}
              >
                <BallCanvas icon={skill.icon.src} />
                <p className='text-lg'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='hidden md:flex flex-col gap-y-8 h-full justify-evenly'>
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
