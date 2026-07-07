import type { VercelRequest, VercelResponse } from '@vercel/node';

import { getAuthenticatedUser } from '../../lib/auth/session';
import { isDbEnabled } from '../../lib/db';

export default async function meHandler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (!isDbEnabled()) {
    return response.status(503).json({
      error: 'DATABASE_URL が未設定のため認証状態を確認できません',
    });
  }

  if (request.method !== 'GET') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const user = await getAuthenticatedUser(request);

    if (!user) {
      return response.status(401).json({ error: '未ログインです' });
    }

    return response.status(200).json({ user });
  } catch (error) {
    console.error('Auth me error:', error);
    return response.status(500).json({ error: '認証状態の取得に失敗しました' });
  }
}
