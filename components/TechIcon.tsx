import Image from 'next/image';

interface TechIconProps {
  skill: {
    name: string;
    icon: {
      src: string;
    };
  };
}

const TechIcon = ({ skill }: TechIconProps) => {
  return (
    <div className='w-[65%] h-[65%] relative'>
      <Image
        className='object-contain'
        src={skill.icon.src}
        alt={skill.name}
        fill
      />
    </div>
  );
};

export default TechIcon;
