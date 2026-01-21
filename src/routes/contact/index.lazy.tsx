import { createLazyFileRoute } from '@tanstack/react-router';

import SafeSurpose from '@/components/SafeSuspense';
import BWOctagon from '@/components/ui/BWOctagon';
import Title from '@/components/ui/Title';
import RandomTips from '@/components/utils/RandomTips';
import { Tips } from '@/constants/message';

import { useMailSend } from './-hooks/useMailSend';

function Contact() {
  const { values, handleChange, handleSubmit, isSubmitting } = useMailSend();

  return (
    <SafeSurpose>
      <div className="flex flex-col items-center justify-center">
        <Title name="Contact to Me" />
        <form className="flex flex-col text-center w-2/3">
          <label className="text-2xl p-4">お名前</label>
          <input
            type="text"
            name="name"
            required
            className="border border-gray-300 p-2 rounded text-black m-2 text-2xl text-center"
            value={values.name}
            onChange={handleChange}
          />
          <label className="text-2xl p-4">メールアドレス</label>
          <input
            type="email"
            name="email"
            required
            className="border border-gray-300 p-2 rounded text-black m-2 text-2xl text-center"
            value={values.email}
            onChange={handleChange}
          />
          <label className="text-2xl p-4">件名</label>
          <input
            type="text"
            name="mainPurpose"
            required
            className="border border-gray-300 p-2 rounded text-black m-2 text-2xl text-center"
            value={values.mainPurpose}
            onChange={handleChange}
          />
          <label className="text-2xl p-4">詳細</label>
          <textarea
            name="description"
            rows={5}
            required
            className="border border-gray-300 p-2 rounded text-black m-2 text-2xl text-center"
            value={values.description}
            onChange={handleChange}
          />
        </form>
        <div className="p-4">
          <BWOctagon
            text={isSubmitting ? '送信中...' : '送信'}
            onClick={handleSubmit}
          />
        </div>
        <RandomTips Tips={Tips} />
      </div>
    </SafeSurpose>
  );
}

export const Route = createLazyFileRoute('/contact/')({
  component: Contact,
});
