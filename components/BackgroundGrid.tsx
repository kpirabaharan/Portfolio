import { cn } from '@/lib/utils';

// The one background treatment used on every page: a faint grid and a teal glow.
export const BackgroundGrid = ({ className }: { className?: string }) => (
  <div
    aria-hidden
    className={cn(
      'pointer-events-none absolute inset-0 overflow-hidden',
      className,
    )}
  >
    <div className='absolute inset-0 bg-grid' />
    <div className='absolute top-0 left-1/2 h-[50vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]' />
  </div>
);
