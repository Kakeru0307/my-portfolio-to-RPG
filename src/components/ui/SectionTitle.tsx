type SectionTitleProps = {
  name: String;
};

const SectionTitle = ({ name }: SectionTitleProps) => {
  return <label className="text-center text-2xl p-4">{name}</label>;
};

export default SectionTitle;
