'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

import { Separator } from '@/components/ui/separator';
import { slideIn } from '@/lib/transitions';

interface ProjectTileProps {
  index: number;
  title: string;
  image: StaticImageData;
  color: string;
  type: string;
  setModal: ({ active, index }: { active: boolean; index: number }) => void;
}

const ProjectTile = ({
  index,
  title,
  image,
  color,
  type,
  setModal,
}: ProjectTileProps) => {
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
        className='group hidden h-full w-full cursor-pointer items-center justify-between
        px-6 py-12 hover:scale-110 hover:opacity-50 lg:flex xl:px-12 xl:py-16'
        onMouseEnter={() => setModal({ active: true, index })}
        onMouseLeave={() => setModal({ active: false, index })}
      >
        <h2
          className='text-3xl font-normal transition duration-500 group-hover:-translate-x-4 lg:text-5xl 
          xl:text-6xl'
        >
          {title}
        </h2>
        <p
          className='text-base font-light transition duration-500 group-hover:translate-x-4 
          xl:text-lg'
        >
          {type}
        </p>
      </motion.div>
      <Separator className='hidden lg:flex' />

      {/* Mobile */}
      <div
        className='group group flex w-full cursor-pointer flex-col gap-y-4 px-2
        lg:hidden'
        onMouseEnter={() => setModal({ active: true, index })}
        onMouseLeave={() => setModal({ active: false, index })}
      >
        <div
          style={{ backgroundColor: color }}
          className='flex aspect-square w-full items-center justify-center'
        >
          <div
            className='relative h-[55%] w-[85%] transition duration-500
            group-hover:scale-105'
          >
            <Image
              className='rounded-md object-cover'
              src={image}
              alt={title}
              fill
            />
          </div>
        </div>
        <h2 className='mt-4 text-3xl sm:text-2xl'>{title}</h2>
        <Separator />
        <p className='text-base font-light'>{type}</p>
      </div>
    </>
  );
};

export default ProjectTile;
