interface SkillCardProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const SkillCard = ({ name, isActive, onClick }: SkillCardProps) => {
  return (
    <div
      className={`${
        isActive ? 'bg-slate-600' : 'bg-slate-900'
      } p-8 flex justify-center text-center
      rounded-lg`}
      onClick={onClick}
    >
      <h2 className='text-lg'>{name}</h2>
    </div>
  );
};

export default SkillCard;
