import { FaHeart, FaUser } from 'react-icons/fa';

import { createLazyFileRoute } from '@tanstack/react-router';

import Title from '@/components/atoms/Title';
import ChatMessage from '@/components/molecules/ChatMessage';
import ProfileSectionCard from '@/components/molecules/ProfileSectionCard';
import SafeSuspense from '@/components/SafeSuspense';
import LifeTable from '@/components/organisms/LifeTable';
import RandomTips from '@/components/organisms/RandomTips';
import Skills from '@/components/organisms/Skills';
import { message, Tips } from '@/constants/message';

function Profile() {
  return (
    <SafeSuspense>
      <div className="flex flex-col items-center justify-center">
        <Title name="His Profile" />
        <ProfileSectionCard icon={FaUser} title="Basic Info" className="mt-0">
          <ChatMessage message={message.MyBasicProfile} />
        </ProfileSectionCard>
        <ProfileSectionCard icon={FaHeart} title="Favorite Hobby & Things">
          <ChatMessage message={message.MyHobby} />
        </ProfileSectionCard>
        <Skills />
        <LifeTable />
        <RandomTips tips={Tips} />
      </div>
    </SafeSuspense>
  );
}

export const Route = createLazyFileRoute('/profile/')({
  component: Profile,
});
