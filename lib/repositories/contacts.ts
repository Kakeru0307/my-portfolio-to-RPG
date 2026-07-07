import { contacts, type NewContact } from '../../drizzle/schema';
import { getDb } from '../db';

export async function saveContact(data: NewContact) {
  const db = getDb();

  if (!db) {
    return null;
  }

  const [created] = await db.insert(contacts).values(data).returning();
  return created;
}
