import type { VercelRequest, VercelResponse } from '@vercel/node';

import { isDbEnabled } from '../lib/db';
import {
  findGameProgressByPlayerId,
  upsertGameProgress,
} from '../lib/repositories/gameProgress';

type GameProgressBody = {
  playerId?: string;
  unlockedPages?: string[];
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

  if (request.method === 'GET') {
    const playerId = request.query.playerId;

    if (typeof playerId !== 'string' || !playerId) {
      return response.status(400).json({ error: 'playerId が必要です' });
    }

    try {
      const progress = await findGameProgressByPlayerId(playerId);
      return response.status(200).json({
        playerId,
        unlockedPages: progress?.unlockedPages ?? [],
      });
    } catch (error) {
      console.error('Game progress GET error:', error);
      return response.status(500).json({ error: '取得に失敗しました' });
    }
  }

  if (request.method === 'POST') {
    const { playerId, unlockedPages } = request.body as GameProgressBody;

    if (!playerId || !Array.isArray(unlockedPages)) {
      return response.status(400).json({
        error: 'playerId と unlockedPages（配列）が必要です',
      });
    }

    try {
      const progress = await upsertGameProgress(playerId, unlockedPages);
      return response.status(200).json(progress);
    } catch (error) {
      console.error('Game progress POST error:', error);
      return response.status(500).json({ error: '保存に失敗しました' });
    }
  }

  return response.status(405).json({ message: 'Method Not Allowed' });
}
