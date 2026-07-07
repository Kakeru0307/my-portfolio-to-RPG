import { createFileRoute } from '@tanstack/react-router';

import { requireAuth } from '@/lib/requireAuth';

export const Route = createFileRoute('/game/')({
  beforeLoad: ({ context }) => {
    requireAuth(context, '/game');
  },
});
