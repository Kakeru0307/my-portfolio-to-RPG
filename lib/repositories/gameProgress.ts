import { eq } from 'drizzle-orm';

import { gameProgress } from '../../drizzle/schema';
import { getDb } from '../db';

export async function findGameProgressByUserId(userId: number) {
  const db = getDb();

  if (!db) {
    return null;
  }

  const [progress] = await db
    .select()
    .from(gameProgress)
    .where(eq(gameProgress.userId, userId))
    .limit(1);

  return progress ?? null;
}

export async function createGameProgress(userId: number) {
  const db = getDb();

  if (!db) {
    return null;
  }

  const [created] = await db
    .insert(gameProgress)
    .values({ userId })
    .onConflictDoNothing()
    .returning();

  if (created) {
    return created;
  }

  return findGameProgressByUserId(userId);
}

export async function upsertGameProgress(userId: number, unlockedPages: string[]) {
  const db = getDb();

  if (!db) {
    return null;
  }

  const [progress] = await db
    .insert(gameProgress)
    .values({ userId, unlockedPages })
    .onConflictDoUpdate({
      target: gameProgress.userId,
      set: { unlockedPages, updatedAt: new Date() },
    })
    .returning();

  return progress;
}
