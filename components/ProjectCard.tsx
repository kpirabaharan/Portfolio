'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

import { Separator } from '@/components/ui/separator';
import { slideIn } from '@/lib/transitions';

interface ProjectCardProps {
  index: number;
  title: string;
  image: StaticImageData;
  color: string;
  type: string;
  setModal: ({ active, index }: { active: boolean; index: number }) => void;
}

export const ProjectCard = ({
  index,
  title,
  image,
  color,
  type,
  setModal,
}: ProjectCardProps) => {
  return (
    <>
      {/* Desktop */}
      <motion.div
        variants={slideIn(
          index % 2 === 1 ? 'right' : 'left',
          'spring',
          Math.floor(index / 2) * 0.4 + 0.2,
          0.8,
        )}
        className='hidden lg:flex justify-between items-center w-full h-full py-12
        xl:py-16 px-6 xl:px-12 cursor-pointer group hover:opacity-50 hover:scale-110'
        onMouseEnter={() => setModal({ active: true, index })}
        onMouseLeave={() => setModal({ active: false, index })}
      >
        <h2
          className='text-3xl lg:text-5xl xl:text-6xl font-normal transition duration-500 
          group-hover:-translate-x-4'
        >
          {title}
        </h2>
        <p
          className='text-sm lg:text-base xl:text-lg font-light transition duration-500 
          group-hover:translate-x-4'
        >
          {type}
        </p>
      </motion.div>
      <Separator className='hidden lg:flex' />

      {/* Mobile */}
      <div
        className='flex flex-col lg:hidden w-full px-2 cursor-pointer group gap-y-4
        group'
        onMouseEnter={() => setModal({ active: true, index })}
        onMouseLeave={() => setModal({ active: false, index })}
      >
        <div
          style={{ backgroundColor: color }}
          className='w-full aspect-square flex justify-center items-center'
        >
          <div
            className='h-[55%] w-[85%] group-hover:scale-105 transition duration-500
            relative'
          >
            <Image
              className='object-cover rounded-md'
              src={image}
              alt={title}
              fill
            />
          </div>
        </div>
        <h2 className='text-3xl sm:text-2xl mt-4'>{title}</h2>
        <Separator />
        <p className='text-sm font-light'>{type}</p>
      </div>
    </>
  );
};
