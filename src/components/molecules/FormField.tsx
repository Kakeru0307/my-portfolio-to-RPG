import FormLabel from '@/components/atoms/FormLabel';
import TextArea from '@/components/atoms/TextArea';
import TextInput from '@/components/atoms/TextInput';

type FormFieldProps = {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const FormField = ({
  label,
  name,
  type = 'text',
  multiline = false,
  rows,
  required,
  value,
  onChange,
}: FormFieldProps) => {
  return (
    <>
      <FormLabel name={label} />
      {multiline ? (
        <TextArea
          name={name}
          rows={rows}
          required={required}
          value={value}
          onChange={onChange}
        />
      ) : (
        <TextInput
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  );
};

export default FormField;
