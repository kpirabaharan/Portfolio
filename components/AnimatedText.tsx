import { TypeAnimation } from 'react-type-animation';

interface AnimatedTextProps {
  className?: string;
  text: Array<string | number | (() => void)>;
}

export const AnimatedText = ({ className, text }: AnimatedTextProps) => {
  return (
    <TypeAnimation
      className={className}
      sequence={[...text]}
      cursor={false}
      repeat={Infinity}
      speed={50}
      deletionSpeed={75}
    />
  );
};
