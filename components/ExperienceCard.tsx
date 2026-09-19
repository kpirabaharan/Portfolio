'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import { fadeIn } from '@/lib/transitions';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { type ExperienceType } from '@/types';

export const ExperienceCard = ({
  title,
  companyName,
  location,
  icon,
  iconBg,
  date,
  points,
}: ExperienceType) => {
  return (
    <motion.li
      variants={fadeIn('up', '', 0.1, 0.6)}
      className='relative pb-8 pl-10 last:pb-0 md:pl-14'
    >
      {/* Timeline node */}
      <span className='absolute top-7 -left-[5px] size-2.5 rounded-full bg-primary shadow-[0_0_12px] ring-4 shadow-primary ring-background' />

      <Card className='transition-colors hover:ring-primary/30'>
        <CardHeader className='flex flex-col gap-4 sm:flex-row sm:items-start'>
          <div
            className='relative size-12 shrink-0 overflow-hidden rounded-lg'
            style={{ background: iconBg }}
          >
            <Image
              src={icon}
              alt={companyName}
              fill
              sizes='48px'
              className='object-contain p-1.5'
            />
          </div>
          <div className='flex flex-1 flex-col gap-1'>
            <CardTitle className='text-lg font-semibold lg:text-xl'>
              {title}
            </CardTitle>
            <CardDescription className='text-sm lg:text-base'>
              {companyName} · {location}
            </CardDescription>
          </div>
          <Badge variant='outline' className='font-mono text-muted-foreground'>
            {date}
          </Badge>
        </CardHeader>
        <CardContent>
          <ul className='ml-4 list-disc space-y-2 marker:text-primary'>
            {points.map((point, index) => (
              <li
                key={index}
                className='pl-1 text-sm leading-relaxed text-muted-foreground lg:text-base'
              >
                {point}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.li>
  );
};
