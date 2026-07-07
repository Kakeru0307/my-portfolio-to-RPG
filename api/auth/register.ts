import type { VercelRequest, VercelResponse } from '@vercel/node';

import { hashPassword } from '../../lib/auth/password';
import { setSessionCookie } from '../../lib/auth/cookies';
import { createSession } from '../../lib/repositories/sessions';
import { createGameProgress } from '../../lib/repositories/gameProgress';
import { createAdventurer, findUserByEmail } from '../../lib/repositories/users';
import { isDbEnabled } from '../../lib/db';
import {
  isValidEmail,
  toPublicUser,
  validateDisplayName,
  validatePassword,
} from '../../lib/types/auth';

type RegisterBody = {
  email?: unknown;
  password?: unknown;
  displayName?: unknown;
};

export default async function registerHandler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (!isDbEnabled()) {
    return response.status(503).json({
      error: 'DATABASE_URL が未設定のため登録できません',
    });
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password, displayName } = request.body as RegisterBody;

  if (
    typeof email !== 'string' ||
    !isValidEmail(email) ||
    !validatePassword(password) ||
    !validateDisplayName(displayName)
  ) {
    return response.status(400).json({
      error:
        'メール・パスワード（8文字以上）・冒険者名（64文字以内）が必要です',
    });
  }

  try {
    const existing = await findUserByEmail(email.toLowerCase());

    if (existing) {
      return response.status(409).json({ error: 'このメールは既に登録されています' });
    }

    const passwordHash = await hashPassword(password);
    const user = await createAdventurer({
      email: email.toLowerCase(),
      passwordHash,
      displayName,
    });

    if (!user) {
      return response.status(500).json({ error: '登録に失敗しました' });
    }

    await createGameProgress(user.id);

    const session = await createSession(user.id);

    if (!session) {
      return response.status(500).json({ error: 'セッションの作成に失敗しました' });
    }

    setSessionCookie(response, session.id);

    return response.status(201).json({ user: toPublicUser(user) });
  } catch (error) {
    console.error('Auth register error:', error);
    return response.status(500).json({ error: '登録に失敗しました' });
  }
}
