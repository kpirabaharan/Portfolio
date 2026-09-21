'use client';

import { ArrowUpRightIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Image, { type StaticImageData } from 'next/image';

import { fadeIn } from '@/lib/transitions';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface CredentialCardProps {
  title: React.ReactNode;
  subtitle: string;
  date: string;
  image: StaticImageData;
  link?: string;
  index?: number;
}

// Shared by Education and Certifications so both read as one system.
export const CredentialCard = ({
  title,
  subtitle,
  date,
  image,
  link,
  index = 0,
}: CredentialCardProps) => {
  return (
    <motion.div
      variants={fadeIn('up', '', 0.1 * index, 0.6)}
      className='h-full'
    >
      <Card className='h-full transition-colors hover:ring-primary/30'>
        <CardHeader className='flex items-start gap-5'>
          <div className='relative size-16 shrink-0 rounded-xl bg-white ring-1 ring-border md:size-20'>
            <Image
              src={image}
              alt=''
              fill
              sizes='80px'
              className='object-contain p-2'
            />
          </div>
          <div className='flex flex-1 flex-col gap-1.5'>
            <CardTitle className='text-base font-semibold md:text-xl'>
              {title}
            </CardTitle>
            <CardDescription className='text-sm md:text-base'>
              {subtitle}
            </CardDescription>
            <Badge
              variant='outline'
              className='mt-1 font-mono text-muted-foreground'
            >
              {date}
            </Badge>
          </div>
          {link && (
            <CardAction>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant='ghost' size='icon' asChild>
                    <a href={link} target='_blank' rel='noreferrer'>
                      <ArrowUpRightIcon className='size-5' />
                      <span className='sr-only'>View credential</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>View credential</TooltipContent>
              </Tooltip>
            </CardAction>
          )}
        </CardHeader>
      </Card>
    </motion.div>
  );
};
