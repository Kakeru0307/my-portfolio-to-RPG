import { eq, lt } from 'drizzle-orm';

import { sessions, users } from '../../drizzle/schema';
import { getDb } from '../db';
import { SESSION_MAX_AGE_MS } from '../auth/cookies';

export async function createSession(userId: number) {
  const db = getDb();

  if (!db) {
    return null;
  }

  const id = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + SESSION_MAX_AGE_MS);

  const [session] = await db
    .insert(sessions)
    .values({ id, userId, expiresAt })
    .returning();

  return session;
}

export async function deleteSession(sessionId: string) {
  const db = getDb();

  if (!db) {
    return;
  }

  await db.delete(sessions).where(eq(sessions.id, sessionId));
}

export async function findUserBySessionId(sessionId: string) {
  const db = getDb();

  if (!db) {
    return null;
  }

  const [row] = await db
    .select({ user: users, session: sessions })
    .from(sessions)
    .innerJoin(users, eq(sessions.userId, users.id))
    .where(eq(sessions.id, sessionId))
    .limit(1);

  if (!row) {
    return null;
  }

  if (row.session.expiresAt < new Date()) {
    await deleteSession(sessionId);
    return null;
  }

  return row.user;
}

export async function deleteExpiredSessions() {
  const db = getDb();

  if (!db) {
    return;
  }

  await db.delete(sessions).where(lt(sessions.expiresAt, new Date()));
}
