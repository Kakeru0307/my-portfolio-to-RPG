import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/')({
  validateSearch: (search: Record<string, unknown>) => ({
    redirect:
      typeof search.redirect === 'string' && search.redirect.startsWith('/')
        ? search.redirect
        : '/',
  }),
});
