import { TypeAnimation } from 'react-type-animation';

interface AnimatedTextProps {
  className?: string;
  text: (string | number | (() => void))[];
}

export const AnimatedText = ({ className, text }: AnimatedTextProps) => {
  return (
    <TypeAnimation
      className={className}
      sequence={[...text]}
      wrapper='span'
      cursor={false}
      repeat={Infinity}
      speed={50}
      deletionSpeed={65}
    />
  );
};
