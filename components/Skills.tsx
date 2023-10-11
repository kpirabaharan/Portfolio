import { useState } from 'react';

import { styles } from '@/lib/styles';
import { techStack } from '@/constants';

import BallCanvas from '@/components/canvas/Ball';
import SkillCard from '@/components/SkillCard';

const Skills = () => {
  const [techBalls, setTechBalls] = useState(techStack[0]);

  return (
    <div className={`h-full w-full max-w-8xl mx-auto ${styles.padding}`}>
      <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
        Technology Stack
      </h1>
      <div className='flex flex-row mt-8 gap-x-8 h-full relative'>
        <div className='flex flex-col gap-y-8 h-full'>
          {techStack.map((tech, index) => (
            <SkillCard
              key={index}
              name={tech.title}
              isActive={techBalls.title === tech.title}
              onClick={() => setTechBalls(tech)}
            />
          ))}
        </div>
        <div className='w-full flex-grow flex justify-center items-center'>
          <div className='flex flex-wrap items-center justify-center gap-8'>
            {techBalls.tech.map((skill) => (
              <div
                className='w-32 h-40 flex flex-col items-center'
                key={skill.name}
              >
                <BallCanvas icon={skill.icon.src} />
                <p className='text-lg'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
