import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

interface ContainerProps extends PropsWithChildren {
  className: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn('mx-auto max-w-7xl', className)}>{children}</div>;
};
