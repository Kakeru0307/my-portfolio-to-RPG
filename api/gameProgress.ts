import type { VercelRequest, VercelResponse } from '@vercel/node';

import { getAuthenticatedUser } from '../lib/auth/session';
import { isDbEnabled } from '../lib/db';
import {
  findGameProgressByUserId,
  upsertGameProgress,
} from '../lib/repositories/gameProgress';
import { validateUnlockedPages } from '../lib/types/auth';

type GameProgressBody = {
  unlockedPages?: unknown;
};

export default async function gameProgressHandler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (!isDbEnabled()) {
    return response.status(503).json({
      error: 'DATABASE_URL が未設定のためゲーム進行を保存できません',
    });
  }

  const user = await getAuthenticatedUser(request);

  if (!user) {
    return response.status(401).json({ error: 'ログインが必要です' });
  }

  if (request.method === 'GET') {
    try {
      const progress = await findGameProgressByUserId(user.id);

      return response.status(200).json({
        userId: user.id,
        unlockedPages: progress?.unlockedPages ?? [],
      });
    } catch (error) {
      console.error('Game progress GET error:', error);
      return response.status(500).json({ error: '取得に失敗しました' });
    }
  }

  if (request.method === 'POST') {
    const { unlockedPages } = request.body as GameProgressBody;

    if (!validateUnlockedPages(unlockedPages)) {
      return response.status(400).json({
        error: 'unlockedPages（文字列配列）が必要です',
      });
    }

    try {
      const progress = await upsertGameProgress(user.id, unlockedPages);
      return response.status(200).json(progress);
    } catch (error) {
      console.error('Game progress POST error:', error);
      return response.status(500).json({ error: '保存に失敗しました' });
    }
  }

  return response.status(405).json({ message: 'Method Not Allowed' });
}
