import { styles } from '@/lib/styles';
import { techStack, frontend } from '@/constants';

import BallCanvas from '@/components/canvas/Ball';
import SkillCard from '@/components/SkillCard';

const Skills = () => {
  return (
    <div className={`w-full max-w-8xl mx-auto ${styles.padding}`}>
      <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
        Technology Stack
      </h1>
      <div className='flex flex-row mt-8 gap-x-8 h-full w-full'>
        <div className='flex flex-col gap-y-8'>
          {techStack.map((tech, index) => (
            <SkillCard key={index} name={tech.title} />
          ))}
        </div>
        <div
          className='w-full h-full flex flex-row flex-wrap items-center
          gap-8'
        >
          {frontend.map((tech) => (
            <div className='w-28 h-28' key={tech.name}>
              <BallCanvas icon={tech.icon.src} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
