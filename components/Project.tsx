'use client';

import { Separator } from '@/components/ui/separator';

interface ProjectProps {
  index: number;
  title: string;
  type: string;
  setModal: ({ active, index }: { active: boolean; index: number }) => void;
}

export const Project = ({ index, title, type, setModal }: ProjectProps) => {
  return (
    <>
      <div
        className='flex justify-between items-center w-full py-12 xl:py-16
        px-6 xl:px-12 cursor-pointer group hover:opacity-50'
        onMouseEnter={() => setModal({ active: true, index })}
        onMouseLeave={() => setModal({ active: false, index })}
      >
        <h2
          className='text-5xl xl:text-6xl font-normal transition duration-500 
          group-hover:-translate-x-4'
        >
          {title}
        </h2>
        <p
          className='text-sm xl:text-lg font-light transition duration-500 
          group-hover:translate-x-4'
        >
          {type}
        </p>
      </div>
      <Separator />
    </>
  );
};
