'use client';

import { PropsWithChildren } from 'react';

import { Button } from '@/components/ui/button';
import MagneticComponent from '@/hoc/MagneticComponent';

interface MagneticButtonProps extends PropsWithChildren {
  buttonClass?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'round' | 'floating';
}

export const MagneticButton = ({
  buttonClass,
  size = 'floating',
  children,
}: MagneticButtonProps) => {
  return (
    <MagneticComponent
      className='relative rounded-full'
      modifier={{ x: 0.4, y: 0.4 }}
    >
      <Button className={`${buttonClass}`} size={size}>
        <MagneticComponent
          className='absolute left-0 top-0 w-full h-full rounded-full
          flex items-center justify-center'
          modifier={{ x: 0.3, y: 0.3 }}
        >
          {children}
        </MagneticComponent>
      </Button>
    </MagneticComponent>
  );
};
