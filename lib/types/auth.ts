import type { User } from '../../drizzle/schema';

export type UserRole = 'adventurer' | 'admin';

export type PublicUser = {
  id: number;
  email: string;
  displayName: string;
  role: UserRole;
};

export function toPublicUser(user: User): PublicUser {
  return {
    id: user.id,
    email: user.email,
    displayName: user.displayName,
    role: user.role,
  };
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateDisplayName(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= 64;
}

export function validatePassword(value: unknown): value is string {
  return typeof value === 'string' && value.length >= 8;
}

export function validateUnlockedPages(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((page) => typeof page === 'string')
  );
}
