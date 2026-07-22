import Title from '@/components/atoms/Title';
import ContactForm from '@/components/organisms/ContactForm';
import RandomTips from '@/components/organisms/RandomTips';
import type { ContactFormValues } from '@/types/contact';

type ContactPageProps = {
  title: string;
  values: ContactFormValues;
  isSubmitting: boolean;
  tips: string[];
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: () => void;
};

const ContactPage = ({
  title,
  values,
  isSubmitting,
  tips,
  onChange,
  onSubmit,
}: ContactPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Title name={title} />
      <ContactForm
        values={values}
        isSubmitting={isSubmitting}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <RandomTips tips={tips} />
    </div>
  );
};

export default ContactPage;
