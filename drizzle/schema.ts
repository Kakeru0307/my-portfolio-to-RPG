import { sql } from 'drizzle-orm';
import {
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const contacts = pgTable('contacts', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  mainPurpose: varchar('main_purpose', { length: 500 }).notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const gameProgress = pgTable('game_progress', {
  id: serial('id').primaryKey(),
  playerId: varchar('player_id', { length: 64 }).notNull().unique(),
  unlockedPages: jsonb('unlocked_pages')
    .$type<string[]>()
    .default(sql`'[]'::jsonb`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type Contact = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert;
export type GameProgress = typeof gameProgress.$inferSelect;
export type NewGameProgress = typeof gameProgress.$inferInsert;
