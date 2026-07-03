type TextInputProps = {
  name: string;
  type?: 'text' | 'email';
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const inputClassName =
  'border border-gray-300 p-2 rounded text-black m-2 text-2xl text-center';

const TextInput = ({
  name,
  type = 'text',
  required,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <input
      type={type}
      name={name}
      required={required}
      className={inputClassName}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
