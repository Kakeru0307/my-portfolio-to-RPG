import { FaHeart, FaUser } from 'react-icons/fa';

import Title from '@/components/atoms/Title';
import ChatMessage from '@/components/molecules/ChatMessage';
import ProfileSectionCard from '@/components/molecules/ProfileSectionCard';
import LifeTable from '@/components/organisms/LifeTable';
import RandomTips from '@/components/organisms/RandomTips';
import Skills from '@/components/organisms/Skills';
import type { Life, SkillItem } from '@/types/life';

type ProfilePageProps = {
  title: string;
  basicInfo: string;
  hobby: string;
  skills: SkillItem[];
  lifeData: Life[];
  tips: string[];
};

const ProfilePage = ({
  title,
  basicInfo,
  hobby,
  skills,
  lifeData,
  tips,
}: ProfilePageProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Title name={title} />
      <ProfileSectionCard icon={FaUser} title="Basic Info" className="mt-0">
        <ChatMessage message={basicInfo} />
      </ProfileSectionCard>
      <ProfileSectionCard icon={FaHeart} title="Favorite Hobby & Things">
        <ChatMessage message={hobby} />
      </ProfileSectionCard>
      <Skills skills={skills} />
      <LifeTable data={lifeData} />
      <RandomTips tips={tips} />
    </div>
  );
};

export default ProfilePage;
