import { createLazyFileRoute } from '@tanstack/react-router';

import SafeSuspense from '@/components/SafeSuspense';
import Title from '@/components/atoms/Title';
import ContactForm from '@/components/organisms/ContactForm';
import RandomTips from '@/components/organisms/RandomTips';
import { Tips } from '@/constants/message';

import { useMailSend } from './-hooks/useMailSend';

function Contact() {
  const { values, handleChange, handleSubmit, isSubmitting } = useMailSend();

  return (
    <SafeSuspense>
      <div className="flex flex-col items-center justify-center">
        <Title name="Contact to Me" />
        <ContactForm
          values={values}
          isSubmitting={isSubmitting}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <RandomTips tips={Tips} />
      </div>
    </SafeSuspense>
  );
}

export const Route = createLazyFileRoute('/contact/')({
  component: Contact,
});
