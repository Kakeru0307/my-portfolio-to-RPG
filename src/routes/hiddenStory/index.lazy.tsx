import { createLazyFileRoute } from '@tanstack/react-router';

import LockedPage from '@/components/organisms/LockedPage';
import { message } from '@/constants/message';

const HiddenStory = () => {
  return <LockedPage message={message.LockedPage} />;
};

export const Route = createLazyFileRoute('/hiddenStory/')({
  component: HiddenStory,
});
