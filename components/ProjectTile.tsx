'use client';

import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Image, { type StaticImageData } from 'next/image';
import { type MouseEvent } from 'react';

import useSplash from '@/hooks/useSplash';
import { slideIn } from '@/lib/transitions';
import { isModifiedClick } from '@/lib/utils';

import { Separator } from '@/components/ui/separator';

interface ProjectTileProps {
  index: number;
  title: string;
  image: StaticImageData;
  color: string;
  type: string;
  link: string;
  caseStudy?: string;
  setModal: ({ active, index }: { active: boolean; index: number }) => void;
}

const ProjectTile = ({
  index,
  title,
  image,
  color,
  type,
  link,
  caseStudy,
  setModal,
}: ProjectTileProps) => {
  const { startSplash } = useSplash();

  // Case studies open in-site with the page transition; everything else is external.
  const linkProps = caseStudy
    ? {
        href: caseStudy,
        onClick: (e: MouseEvent<HTMLAnchorElement>) => {
          if (isModifiedClick(e)) return;
          e.preventDefault();
          startSplash(caseStudy);
        },
      }
    : { href: link, target: '_blank', rel: 'noreferrer' };
  const ArrowIcon = caseStudy ? ArrowRightIcon : ArrowUpRightIcon;

  return (
    <>
      {/* Desktop: text row, the image follows the cursor (ProjectModal) */}
      <motion.a
        {...linkProps}
        variants={slideIn(
          index % 2 === 1 ? 'right' : 'left',
          'spring',
          Math.floor(index / 2) * 0.4 + 0.2,
          0.8,
        )}
        className='group hidden w-full items-center justify-between px-6 py-12 transition-opacity duration-500 hover:opacity-60 lg:flex xl:px-12 xl:py-14'
        onMouseEnter={() => setModal({ active: true, index })}
        onMouseLeave={() => setModal({ active: false, index })}
      >
        <h3 className='flex items-baseline gap-6 text-4xl font-medium tracking-tight transition duration-500 group-hover:-translate-x-3 xl:text-6xl'>
          <span className='font-mono text-sm text-primary'>
            {String(index + 1).padStart(2, '0')}
          </span>
          {title}
        </h3>
        <p className='text-base text-muted-foreground transition duration-500 group-hover:translate-x-3 xl:text-lg'>
          {type}
        </p>
      </motion.a>
      <Separator className='hidden lg:block' />

      {/* Mobile / tablet: image cards */}
      <a {...linkProps} className='group flex w-full flex-col gap-4 lg:hidden'>
        <div
          style={{ backgroundColor: color }}
          className='flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl ring-1 ring-foreground/10'
        >
          <div className='relative h-[55%] w-[85%] transition duration-500 group-hover:scale-105'>
            <Image
              className='rounded-md object-cover'
              src={image}
              alt={title}
              fill
              sizes='(min-width: 640px) 45vw, 90vw'
            />
          </div>
        </div>
        <div className='flex items-center justify-between gap-4'>
          <h3 className='text-2xl font-medium tracking-tight'>{title}</h3>
          <ArrowIcon className='size-5 text-primary transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
        </div>
        <Separator />
        <p className='text-sm text-muted-foreground'>{type}</p>
      </a>
    </>
  );
};

export default ProjectTile;
