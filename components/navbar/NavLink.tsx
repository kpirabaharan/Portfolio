import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

import MagneticButton from '@/hoc/MagneticButton';

interface NavLinkProps extends PropsWithChildren {
  className?: string;
  side?: 'left' | 'bottom';
  size?: 'small' | 'large';
  isActive?: boolean;
}

export const NavLink = ({
  children,
  className,
  side = 'bottom',
  size = 'small',
  isActive,
}: NavLinkProps) => {
  return (
    <MagneticButton className={className} modifier={{ x: 0.25, y: 0.25 }}>
      <div className={'group relative md:p-3'}>
        {children}
        <div
          className={`group-hover:opacity-100 ${
            isActive ? 'opacity-100' : 'opacity-0'
          } ${size === 'large' ? 'w-3 h-3' : 'w-2 h-2'} bg-white 
        absolute ${
          side === 'left'
            ? size === 'large'
              ? '-left-8 bottom-1/2 translate-y-1/2'
              : '-left-6 bottom-1/2 translate-y-1/2'
            : '-bottom-2 left-1/2 -translate-x-1/2'
        } 
        rounded-full transition duration-300`}
        />
      </div>
    </MagneticButton>
  );
};
