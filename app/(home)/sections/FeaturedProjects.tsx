import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { useMousePosition } from '@/hooks/useMousePosition';
import { textVariant } from '@/lib/transitions';
import { styles } from '@/lib/styles';
import { FeaturedProjectType } from '@/types';

import { Separator } from '@/components/ui/separator';

import { featuredProjects } from '@/constants';
import Image from 'next/image';

const ProjectCard = ({ name, image, link, type }: FeaturedProjectType) => {
  const mousePosition = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`py-8 px-8 flex flex-row items-center justify-between 
      cursor-pointer group ${isHovered ? 'z-0' : 'z-20'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className='text-3xl lg:text-5xl xl:text-6xl'>{name}</h3>
      <p className='text-lg lg:text-xl xl:text-2xl font-light text-muted-foreground'>
        {type}
      </p>
      {isHovered && (
        <div
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          className='absolute -translate-x-1/2 -translate-y-1/2 h-96 w-96 z-30
          transition duration-300 bg-secondary rounded-lg flex items-center
          justify-center overflow-hidden'
        >
          <div className='w-[80%] h-[60%] relative'>
            <Image
              src={image.src}
              alt={name}
              fill
              className='object-cover object-center'
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

const FeaturedProjects = () => {
  return (
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHead}>FEATURED PROJECTS</h2>
      <ul className='list-disc flex flex-col gap-y-8 mt-8'>
        <Separator />
        {featuredProjects.map((project, ind) => (
          <>
            <ProjectCard key={ind} {...project} />
            <Separator />
          </>
        ))}
      </ul>
    </motion.div>
  );
};

export default SectionWrapper(FeaturedProjects, 'projects', 'max-w-7xl');
