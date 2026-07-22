import { createLazyFileRoute } from '@tanstack/react-router';

import LockedPage from '@/components/organisms/LockedPage';
import { message } from '@/constants/message';

const Room = () => {
  return <LockedPage message={message.LockedPage} />;
};

export const Route = createLazyFileRoute('/room/')({
  component: Room,
});
