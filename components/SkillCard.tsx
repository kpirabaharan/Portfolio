interface SkillCardProps {
  name: string;
  onClick: () => void;
}

const SkillCard = ({ name, onClick }: SkillCardProps) => {
  return (
    <div
      className='bg-slate-900 p-8 flex justify-center text-center
      rounded-lg'
      onClick={onClick}
    >
      <h2 className='text-lg'>{name}</h2>
    </div>
  );
};

export default SkillCard;
