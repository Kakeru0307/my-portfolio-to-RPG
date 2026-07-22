import { createLazyFileRoute } from '@tanstack/react-router';

import SafeSuspense from '@/components/SafeSuspense';
import ProfilePage from '@/components/organisms/ProfilePage';
import { LifeData, skills } from '@/constants/LifeData';
import { message, Tips } from '@/constants/message';

function Profile() {
  return (
    <SafeSuspense>
      <ProfilePage
        title="His Profile"
        basicInfo={message.MyBasicProfile}
        hobby={message.MyHobby}
        skills={skills}
        lifeData={LifeData}
        tips={Tips}
      />
    </SafeSuspense>
  );
}

export const Route = createLazyFileRoute('/profile/')({
  component: Profile,
});
