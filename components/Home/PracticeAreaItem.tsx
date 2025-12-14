interface PracticeAreaItemProps {
  name: string;
}

const PracticeAreaItem = ({ name }: PracticeAreaItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-0.5 h-4 bg-black"></div>
      <span className="text-black">{name}</span>
    </div>
  );
};

export default PracticeAreaItem;

