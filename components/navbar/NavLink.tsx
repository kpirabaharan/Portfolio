import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

interface NavLinkProps extends PropsWithChildren {
  className?: string;
  side?: 'left' | 'bottom';
  size?: 'small' | 'large';
}

export const NavLink = ({
  children,
  className,
  side = 'bottom',
  size = 'small',
}: NavLinkProps) => {
  return (
    <div className={cn('group relative', className)}>
      {children}
      <div
        className={`group-hover:opacity-100 opacity-0 ${
          size === 'large' ? 'w-3 h-3' : 'w-2 h-2'
        } bg-white 
        absolute ${
          side === 'left'
            ? size === 'large'
              ? '-left-8 bottom-1/2 translate-y-1/2'
              : '-left-6 bottom-1/2 translate-y-1/2'
            : '-bottom-4 left-1/2 -translate-x-1/2'
        } 
        rounded-full transition duration-300`}
      />
    </div>
  );
};
