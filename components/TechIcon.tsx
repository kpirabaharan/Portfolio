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
    <div className='relative h-[65%] w-[65%]'>
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
