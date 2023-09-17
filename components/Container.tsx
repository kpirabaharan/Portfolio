import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

interface ContainerProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

export const Container = ({ id, children, className }: ContainerProps) => {
  return (
    <div id={id} className={cn('mx-auto max-w-7xl w-full', className)}>
      {children}
    </div>
  );
};
