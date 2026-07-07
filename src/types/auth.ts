export type UserRole = 'adventurer' | 'admin';

export type PublicUser = {
  id: number;
  email: string;
  displayName: string;
  role: UserRole;
};

export type AuthTab = 'register' | 'login';
