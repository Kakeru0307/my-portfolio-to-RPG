type FormLabelProps = {
  name: string;
};

const FormLabel = ({ name }: FormLabelProps) => {
  return <label className="text-center text-2xl p-4">{name}</label>;
};

export default FormLabel;
