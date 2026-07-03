type TitleProps = {
  name: string;
  description?: string;
};

const Title = ({ name, description }: TitleProps) => {
  return (
    <h1 className="text-4xl mb-8 mt-4 text-center">
      {name}
      {description && (
        <>
          <br /> {description}
        </>
      )}
    </h1>
  );
};

export default Title;
