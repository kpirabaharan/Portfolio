import { linkMeta } from '@/lib/links';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';

import { MagneticButton } from '@/components/MagneticButton';
import { Badge } from '@/components/ui/badge';

interface ProjectHeaderProps {
  title: string;
  category: string[];
  keyTech: string[];
  date: string;
  /** Calls to action: repos, demo videos, or live sites when something is hosted. */
  links: { label: string; href: string }[];
}

const Meta = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className='flex flex-col gap-4 border-t pt-5'>
    <p className='font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase'>
      {label}
    </p>
    {children}
  </div>
);

const ProjectHeader = ({
  title,
  category,
  keyTech,
  date,
  links,
}: ProjectHeaderProps) => {
  return (
    <div className={cn(styles.container, 'relative pt-16 pb-24 md:pt-28')}>
      <p className='flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-primary uppercase'>
        <span className='h-px w-10 bg-primary/50' />
        Case Study
      </p>
      <h1 className='mt-4 text-4xl font-semibold tracking-tight md:text-6xl xl:text-8xl'>
        {title}
      </h1>
      <div className='mt-12 grid grid-cols-1 gap-8 md:mt-24 md:grid-cols-3'>
        <Meta label='Category'>
          <div className='flex flex-wrap gap-2'>
            {category.map(c => (
              <Badge key={c} variant='secondary' className='font-mono'>
                {c}
              </Badge>
            ))}
          </div>
        </Meta>
        <Meta label='Key Technologies'>
          <div className='flex flex-wrap gap-2'>
            {keyTech.map(t => (
              <Badge key={t} variant='outline'>
                {t}
              </Badge>
            ))}
          </div>
        </Meta>
        <Meta label='Date'>
          <p className='text-base md:text-lg'>{date}</p>
        </Meta>
      </div>

      {/* The magnetic circles overlap the top edge of the hero image below. */}
      <div className='relative z-20 mt-12 flex gap-4 md:absolute md:right-16 md:bottom-0 md:mt-0 md:translate-y-1/2'>
        {links.map(({ label, href }) => {
          const { Icon } = linkMeta(href, label);
          return (
            <div key={href}>
              <MagneticButton href={href} className='text-base lg:text-lg'>
                {label}
                <Icon className='size-5' />
              </MagneticButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectHeader;
