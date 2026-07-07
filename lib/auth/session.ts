import type { VercelRequest } from '@vercel/node';

import { parseCookies, SESSION_COOKIE_NAME } from './cookies';
import { findUserBySessionId } from '../repositories/sessions';
import { toPublicUser, type PublicUser } from '../types/auth';

export async function getAuthenticatedUser(
  request: VercelRequest
): Promise<PublicUser | null> {
  const cookies = parseCookies(request);
  const sessionId = cookies[SESSION_COOKIE_NAME];

  if (!sessionId || typeof sessionId !== 'string') {
    return null;
  }

  const user = await findUserBySessionId(sessionId);

  if (!user) {
    return null;
  }

  return toPublicUser(user);
}
