'use client';

import { TypeAnimation } from 'react-type-animation';

interface AnimatedTextProps {
  className?: string;
  text: (string | number)[];
}

export const AnimatedText = ({ className, text }: AnimatedTextProps) => {
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
