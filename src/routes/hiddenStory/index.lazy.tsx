import { createLazyFileRoute } from '@tanstack/react-router';

import LockedPage from '@/components/organisms/LockedPage';

function HiddenStory() {
  return <LockedPage />;
}

export const Route = createLazyFileRoute('/hiddenStory/')({
  component: HiddenStory,
});
