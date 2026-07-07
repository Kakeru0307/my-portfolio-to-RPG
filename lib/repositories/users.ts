import { eq } from 'drizzle-orm';

import { users } from '../../drizzle/schema';
import { getDb } from '../db';

export async function findUserByEmail(email: string) {
  const db = getDb();

  if (!db) {
    return null;
  }

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  return user ?? null;
}

export async function findUserById(id: number) {
  const db = getDb();

  if (!db) {
    return null;
  }

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, id))
    .limit(1);

  return user ?? null;
}

export async function createAdventurer(input: {
  email: string;
  passwordHash: string;
  displayName: string;
}) {
  const db = getDb();

  if (!db) {
    return null;
  }

  const [user] = await db
    .insert(users)
    .values({
      email: input.email,
      passwordHash: input.passwordHash,
      displayName: input.displayName.trim(),
      role: 'adventurer',
    })
    .returning();

  return user;
}

export async function upsertAdminUser(input: {
  email: string;
  passwordHash: string;
  displayName: string;
}) {
  const db = getDb();

  if (!db) {
    return null;
  }

  const [user] = await db
    .insert(users)
    .values({
      email: input.email,
      passwordHash: input.passwordHash,
      displayName: input.displayName.trim(),
      role: 'admin',
    })
    .onConflictDoUpdate({
      target: users.email,
      set: {
        passwordHash: input.passwordHash,
        displayName: input.displayName.trim(),
        role: 'admin',
      },
    })
    .returning();

  return user;
}
