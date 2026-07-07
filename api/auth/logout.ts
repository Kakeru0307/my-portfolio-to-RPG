import type { VercelRequest, VercelResponse } from '@vercel/node';

import { clearSessionCookie, parseCookies, SESSION_COOKIE_NAME } from '../../lib/auth/cookies';
import { deleteSession } from '../../lib/repositories/sessions';

export default async function logoutHandler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const cookies = parseCookies(request);
  const sessionId = cookies[SESSION_COOKIE_NAME];

  if (sessionId) {
    try {
      await deleteSession(sessionId);
    } catch (error) {
      console.error('Auth logout error:', error);
    }
  }

  clearSessionCookie(response);

  return response.status(200).json({ ok: true });
}
