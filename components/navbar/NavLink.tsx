import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

interface NavLinkProps extends PropsWithChildren {
  className?: string;
}

export const NavLink = ({ children, className }: NavLinkProps) => {
  return (
    <div className={cn('group relative', className)}>
      {children}
      <div
        className='group-hover:opacity-100 opacity-0 w-2 h-2 bg-white 
        absolute -left-6 bottom-1/2 translate-y-1/2 md:-bottom-4 md:left-1/2 md:-translate-x-1/2 rounded-full 
        transition duration-300'
      />
    </div>
  );
};
