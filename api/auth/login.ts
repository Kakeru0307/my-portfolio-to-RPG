import type { VercelRequest, VercelResponse } from '@vercel/node';

import { verifyPassword } from '../../lib/auth/password';
import { setSessionCookie } from '../../lib/auth/cookies';
import { createSession } from '../../lib/repositories/sessions';
import { findUserByEmail } from '../../lib/repositories/users';
import { isDbEnabled } from '../../lib/db';
import { isValidEmail, toPublicUser, validatePassword } from '../../lib/types/auth';

type LoginBody = {
  email?: unknown;
  password?: unknown;
};

export default async function loginHandler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (!isDbEnabled()) {
    return response.status(503).json({
      error: 'DATABASE_URL が未設定のためログインできません',
    });
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = request.body as LoginBody;

  if (
    typeof email !== 'string' ||
    !isValidEmail(email) ||
    !validatePassword(password)
  ) {
    return response.status(400).json({
      error: 'メールとパスワード（8文字以上）が必要です',
    });
  }

  try {
    const user = await findUserByEmail(email.toLowerCase());

    if (!user) {
      return response.status(401).json({ error: 'メールまたはパスワードが正しくありません' });
    }

    const isValid = await verifyPassword(password, user.passwordHash);

    if (!isValid) {
      return response.status(401).json({ error: 'メールまたはパスワードが正しくありません' });
    }

    const session = await createSession(user.id);

    if (!session) {
      return response.status(500).json({ error: 'セッションの作成に失敗しました' });
    }

    setSessionCookie(response, session.id);

    return response.status(200).json({ user: toPublicUser(user) });
  } catch (error) {
    console.error('Auth login error:', error);
    return response.status(500).json({ error: 'ログインに失敗しました' });
  }
}
