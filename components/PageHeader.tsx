import { cn } from '@/lib/utils';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
  className?: string;
}

// Title block shared by the Skills, Projects and Contact pages.
export const PageHeader = ({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) => (
  <div className={cn('flex flex-col gap-4', className)}>
    <p className='flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-primary uppercase'>
      <span className='h-px w-10 bg-primary/50' />
      {eyebrow}
    </p>
    <h1 className='text-4xl font-semibold tracking-tight md:text-6xl xl:text-7xl'>
      {title}
    </h1>
    {description && (
      <div className='max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg'>
        {description}
      </div>
    )}
  </div>
);
