import { createLazyFileRoute } from '@tanstack/react-router';
import SafeSurpose from '@/components/SafeSuspense';
import BWOctagon from '@/components/ui/BWOctagon';
import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mainPurpose, setMainPurpose] = useState('');
  const [description, setDescription] = useState('');

  return (
    <SafeSurpose>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl mt-8">Contact to Me</h1>
        <form className="flex flex-col text-center w-2/3">
          <label className="text-2xl p-4">お名前</label>
          <input
            type="text"
            name="name"
            required
            className="border border-gray-300 p-2 rounded text-black m-2 text-2xl text-center"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="text-2xl p-4">メールアドレス</label>
          <input
            type="email"
            name="email"
            required
            className="border border-gray-300 p-2 rounded text-black m-2 text-2xl text-center"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-2xl p-4">件名</label>
          <input
            type="text"
            name="mainPurpose"
            required
            className="border border-gray-300 p-2 rounded text-black m-2 text-2xl text-center"
            value={mainPurpose}
            onChange={(e) => setMainPurpose(e.target.value)}
          />
          <label className="text-2xl p-4">詳細</label>
          <textarea
            name="description"
            rows={5}
            required
            className="border border-gray-300 p-2 rounded text-black m-2 text-2xl text-center"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        <div className="p-4">
          <BWOctagon text="送信" />
        </div>
      </div>
    </SafeSurpose>
  );
}

export const Route = createLazyFileRoute('/contact/')({
  component: Contact,
});
