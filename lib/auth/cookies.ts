import type { VercelRequest, VercelResponse } from '@vercel/node';

export const SESSION_COOKIE_NAME = 'session_id';
export const SESSION_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

export function parseCookies(
  request: VercelRequest
): Record<string, string> {
  const header = request.headers.cookie;

  if (!header) {
    return {};
  }

  return Object.fromEntries(
    header.split(';').map((cookiePart) => {
      const [key, ...valueParts] = cookiePart.trim().split('=');
      return [key, decodeURIComponent(valueParts.join('='))];
    })
  );
}

export function setSessionCookie(
  response: VercelResponse,
  sessionId: string
): void {
  const secure =
    process.env.NODE_ENV === 'production' ? '; Secure' : '';
  const maxAgeSeconds = Math.floor(SESSION_MAX_AGE_MS / 1000);

  response.setHeader(
    'Set-Cookie',
    `${SESSION_COOKIE_NAME}=${sessionId}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${maxAgeSeconds}${secure}`
  );
}

export function clearSessionCookie(response: VercelResponse): void {
  response.setHeader(
    'Set-Cookie',
    `${SESSION_COOKIE_NAME}=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax`
  );
}
