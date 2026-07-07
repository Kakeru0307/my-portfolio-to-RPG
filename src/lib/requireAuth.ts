import { redirect } from '@tanstack/react-router';

import type { RouterContext } from '@/types/router';
import type { PublicUser } from '@/types/auth';

export function requireAuth(
  context: RouterContext,
  redirectPath: string
): PublicUser {
  if (!context.auth.user) {
    throw redirect({
      to: '/auth',
      search: { redirect: redirectPath },
    });
  }

  return context.auth.user;
}
