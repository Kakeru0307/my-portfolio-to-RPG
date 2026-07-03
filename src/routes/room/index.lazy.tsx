import { createLazyFileRoute } from '@tanstack/react-router';

import LockedPage from '@/components/organisms/LockedPage';

function Room() {
  return <LockedPage />;
}

export const Route = createLazyFileRoute('/room/')({
  component: Room,
});
