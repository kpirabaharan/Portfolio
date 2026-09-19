'use client';

import { ArrowRightIcon, ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';
import { FaGithub, FaYoutube } from 'react-icons/fa6';

import useSplash from '@/hooks/useSplash';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { type ProjectType } from '@/types';

const FILTERS = ['All', 'Full Stack', 'Mobile', 'Mechatronics'] as const;

// Some "github" links are actually demo videos.
const linkMeta = (url: string, fallback: string) =>
  url.includes('youtube.com')
    ? { label: 'Video', Icon: FaYoutube }
    : url.includes('github.com')
      ? { label: 'Code', Icon: FaGithub }
      : { label: fallback, Icon: ExternalLinkIcon };

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const { startSplash } = useSplash();
  const { title, description, type, image, github, website, link } = project;
  const source = linkMeta(github, 'Source');
  const live = website ? linkMeta(website, 'Live site') : undefined;

  return (
    <Card className='group h-full gap-0 py-0 transition duration-300 hover:-translate-y-1 hover:ring-primary/40'>
      <div className='relative aspect-video overflow-hidden bg-muted'>
        <Image
          src={image}
          alt={title}
          fill
          sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
          className='object-cover transition duration-500 group-hover:scale-105'
        />
      </div>
      <CardHeader className='gap-2 pt-5'>
        <div className='flex flex-wrap gap-1.5'>
          {type.map(t => (
            <Badge key={t} variant='secondary' className='font-mono'>
              {t}
            </Badge>
          ))}
        </div>
        <CardTitle className='mt-1 text-lg font-semibold'>{title}</CardTitle>
        <CardDescription className='leading-relaxed'>
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className='mt-auto flex-wrap gap-2 pt-5 pb-5'>
        <Button variant='outline' size='sm' asChild>
          <a href={github} target='_blank' rel='noreferrer'>
            <source.Icon />
            {source.label}
          </a>
        </Button>
        {website && live && (
          <Button variant='ghost' size='sm' asChild>
            <a href={website} target='_blank' rel='noreferrer'>
              <live.Icon />
              {live.label === 'Video' ? 'Demo' : live.label}
            </a>
          </Button>
        )}
        {link && (
          <Button
            variant='ghost'
            size='sm'
            className='ml-auto text-primary hover:text-primary'
            onClick={() => startSplash(link)}
          >
            Details
            <ArrowRightIcon />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export const ProjectGrid = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <Tabs defaultValue='All' className='gap-8'>
      <TabsList className='h-auto! flex-wrap'>
        {FILTERS.map(filter => (
          <TabsTrigger key={filter} value={filter} className='px-4 py-1.5'>
            {filter}
          </TabsTrigger>
        ))}
      </TabsList>
      {FILTERS.map(filter => (
        <TabsContent
          key={filter}
          value={filter}
          className='grid animate-in gap-6 duration-500 fade-in-0 slide-in-from-bottom-2 sm:grid-cols-2 lg:grid-cols-3'
        >
          {projects
            .filter(p => filter === 'All' || p.type.includes(filter))
            .map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};
