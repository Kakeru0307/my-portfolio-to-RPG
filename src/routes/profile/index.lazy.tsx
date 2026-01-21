import { FaHeart, FaUser } from 'react-icons/fa';

import { createLazyFileRoute } from '@tanstack/react-router';

import ChatMessage from '@/components/ChatMessage';
import SafeSuspense from '@/components/SafeSuspense';
import RandomTips from '@/components/utils/RandomTips';
import { message } from '@/constants/message';
import { Tips } from '@/constants/message';

import LifeTable from './-component/LifeTable';
import Skills from './-component/Skills';

function Profile() {
  return (
    <SafeSuspense>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl m-8 text-center">His Profile</h1>
        <div className="flex flex-col items-center space-x-2 bg-gray-900 border-2 border-white p-5 w-1/2">
          <div className="flex items-center space-x-3 mb-4">
            <FaUser className="w-8 h-8" />
            <h3 className="text-2xl">Basic Info</h3>
          </div>
          <ChatMessage message={message.MyBasicProfile} />
        </div>
        <div className="flex flex-col items-center space-x-2 bg-gray-900 border-2 border-white p-5 w-1/2 mx-auto m-4">
          <div className="flex items-center space-x-3 mb-4">
            <FaHeart className="w-8 h-8" />
            <h3 className="text-2xl">Favorite Hobby & Things</h3>
          </div>
          <ChatMessage message={message.MyHobby} />
        </div>
        <Skills />
        <LifeTable />
        <RandomTips Tips={Tips} />
      </div>
    </SafeSuspense>
  );
}

export const Route = createLazyFileRoute('/profile/')({
  component: Profile,
});
