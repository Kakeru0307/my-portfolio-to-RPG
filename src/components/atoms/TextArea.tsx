type TextAreaProps = {
  name: string;
  rows?: number;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const textareaClassName =
  'border border-gray-300 p-2 rounded text-black m-2 text-2xl text-center';

const TextArea = ({
  name,
  rows = 5,
  required,
  value,
  onChange,
}: TextAreaProps) => {
  return (
    <textarea
      name={name}
      rows={rows}
      required={required}
      className={textareaClassName}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
