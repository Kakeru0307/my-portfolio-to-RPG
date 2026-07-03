import { eq } from 'drizzle-orm';

import { gameProgress } from '../../drizzle/schema';
import { getDb } from '../db';

export async function findGameProgressByPlayerId(playerId: string) {
  const db = getDb();

  if (!db) {
    return null;
  }

  const [progress] = await db
    .select()
    .from(gameProgress)
    .where(eq(gameProgress.playerId, playerId))
    .limit(1);

  return progress ?? null;
}

export async function upsertGameProgress(playerId: string, unlockedPages: string[]) {
  const db = getDb();

  if (!db) {
    return null;
  }

  const existing = await findGameProgressByPlayerId(playerId);

  if (existing) {
    const [updated] = await db
      .update(gameProgress)
      .set({ unlockedPages, updatedAt: new Date() })
      .where(eq(gameProgress.playerId, playerId))
      .returning();

    return updated;
  }

  const [created] = await db
    .insert(gameProgress)
    .values({ playerId, unlockedPages })
    .returning();

  return created;
}
