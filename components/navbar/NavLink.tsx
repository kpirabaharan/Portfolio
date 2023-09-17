'use client';

import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

interface NavLinkProps extends PropsWithChildren {
  className?: string;
}

const NavLink = ({ children, className }: NavLinkProps) => {
  return (
    <div className={cn('group relative', className)}>
      {children}
      <div
        className='group-hover:opacity-100 opacity-0 w-2 h-2 bg-white 
        absolute -bottom-4 left-[50%] -translate-x-[50%] rounded-full 
        transition duration-300'
      />
    </div>
  );
};

export default NavLink;
