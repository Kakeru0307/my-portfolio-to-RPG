import { config } from 'dotenv';

config({ path: '.env.local' });
config({ path: '.env' });

import { hashPassword } from '../lib/auth/password';
import { upsertAdminUser } from '../lib/repositories/users';

async function seed() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const displayName = process.env.ADMIN_DISPLAY_NAME ?? '管理者';

  if (!email || !password) {
    console.error('ADMIN_EMAIL と ADMIN_PASSWORD を設定してください');
    process.exit(1);
  }

  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL を設定してください');
    process.exit(1);
  }

  const passwordHash = await hashPassword(password);
  const user = await upsertAdminUser({
    email: email.toLowerCase(),
    passwordHash,
    displayName,
  });

  if (!user) {
    console.error('管理者ユーザーの投入に失敗しました');
    process.exit(1);
  }

  console.log(`管理者を投入しました: ${user.email} (${user.displayName})`);
}

seed().catch((error) => {
  console.error('Seed error:', error);
  process.exit(1);
});
