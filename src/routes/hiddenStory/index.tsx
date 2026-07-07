import { createFileRoute } from '@tanstack/react-router';

import { requireAuth } from '@/lib/requireAuth';

export const Route = createFileRoute('/hiddenStory/')({
  beforeLoad: ({ context }) => {
    requireAuth(context, '/hiddenStory');
  },
});
