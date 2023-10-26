import React from 'react';

import { styles } from '@/lib/styles';

import { Separator } from '@/components/ui/separator';

interface ProjectHeaderProps {
  title: string;
  category: string[];
  keyTech: string[];
  date: string;
}

const ProjectHeader = ({
  title,
  category,
  keyTech,
  date,
}: ProjectHeaderProps) => {
  return (
    <div
      className={`mx-auto max-w-7xl ${styles.projectPaddingX}`}
    >
      <h1 className='text-4xl md:text-5xl lg:text-7xl xl:text-8xl'>{title}</h1>
      <div className='mt-12 md:mt-36 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8'>
        <div className='flex flex-col gap-y-6 md:gap-y-8'>
          <p className='text-xs md:text-sm text-muted-foreground'>Category</p>
          <Separator />
          <p className='text-base md:text-lg'>{category.join(' + ')}</p>
        </div>
        <div className='flex flex-col gap-y-6 md:gap-y-8'>
          <p className='text-xs md:text-sm text-muted-foreground'>
            Key Technologies
          </p>
          <Separator />
          <p className='text-base md:text-lg'>{keyTech.join(', ')}</p>
        </div>
        <div className='flex flex-col gap-y-6 md:gap-y-8'>
          <p className='text-xs md:text-sm text-muted-foreground'>Date</p>
          <Separator />
          <p className='text-base md:text-lg'>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
