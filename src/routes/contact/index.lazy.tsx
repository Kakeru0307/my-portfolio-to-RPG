import { createLazyFileRoute } from '@tanstack/react-router';

import SafeSuspense from '@/components/SafeSuspense';
import ContactPage from '@/components/organisms/ContactPage';
import { Tips } from '@/constants/message';

import { useMailSend } from './-hooks/useMailSend';

function Contact() {
  const { values, handleChange, handleSubmit, isSubmitting } = useMailSend();

  return (
    <SafeSuspense>
      <ContactPage
        title="Contact to Me"
        values={values}
        isSubmitting={isSubmitting}
        tips={Tips}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </SafeSuspense>
  );
}

export const Route = createLazyFileRoute('/contact/')({
  component: Contact,
});
