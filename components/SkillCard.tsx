interface SkillCardProps {
  name: string;
}

const SkillCard = ({ name }: SkillCardProps) => {
  return (
    <div
      className=' bg-slate-900 p-8 flex justify-center text-center
      rounded-lg '
    >
      <h2>{name}</h2>
    </div>
  );
};

export default SkillCard;
