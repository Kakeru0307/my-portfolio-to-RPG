import BWOctagon from '@/components/atoms/BWOctagon';
import FormField from '@/components/molecules/FormField';
import type { ContactFormValues } from '@/types/contact';

type ContactFormProps = {
  values: ContactFormValues;
  isSubmitting: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: () => void;
};

const ContactForm = ({
  values,
  isSubmitting,
  onChange,
  onSubmit,
}: ContactFormProps) => {
  return (
    <>
      <form className="flex flex-col text-center w-2/3">
        <FormField
          label="お名前"
          name="name"
          required
          value={values.name}
          onChange={onChange}
        />
        <FormField
          label="メールアドレス"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={onChange}
        />
        <FormField
          label="件名"
          name="mainPurpose"
          required
          value={values.mainPurpose}
          onChange={onChange}
        />
        <FormField
          label="詳細"
          name="description"
          multiline
          required
          value={values.description}
          onChange={onChange}
        />
      </form>
      <div className="p-4">
        <BWOctagon
          text={isSubmitting ? '送信中...' : '送信'}
          onClick={onSubmit}
        />
      </div>
    </>
  );
};

export default ContactForm;
