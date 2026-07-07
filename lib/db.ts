import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import * as schema from '../drizzle/schema';

let db: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return null;
  }

  if (!db) {
    const sql = neon(databaseUrl);
    db = drizzle(sql, { schema });
  }

  return db;
}

export function isDbEnabled() {
  return Boolean(process.env.DATABASE_URL);
}
