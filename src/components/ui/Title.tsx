type TitleProps = {
  name: String;
  description: String;
};

const Title = ({ name, description }: TitleProps) => {
  return (
    <h1 className="text-4xl mb-8 mt-4 text-center">
      {name}
      <br /> {description}
    </h1>
  );
};

export default Title;
