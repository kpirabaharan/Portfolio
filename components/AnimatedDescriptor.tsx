'use client';

import { TypeAnimation } from 'react-type-animation';

interface AnimatedDescriptorProps {
  className?: string;
  text: (string | number)[];
}

export const AnimatedDescriptor = ({
  className,
  text,
}: AnimatedDescriptorProps) => {
  return (
    <TypeAnimation
      className={className}
      sequence={[...text]}
      wrapper='span'
      cursor={true}
      repeat={Infinity}
      speed={50}
      deletionSpeed={65}
    />
  );
};
