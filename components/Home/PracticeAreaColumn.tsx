import PracticeAreaItem from "./PracticeAreaItem";

interface PracticeAreaColumnProps {
  services: string[];
}

const PracticeAreaColumn = ({ services }: PracticeAreaColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      {services.map((service, index) => (
        <PracticeAreaItem key={index} name={service} />
      ))}
    </div>
  );
};

export default PracticeAreaColumn;

