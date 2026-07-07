import type { PublicUser } from '@/types/auth';

type AuthResponse = {
  user: PublicUser;
};

async function parseAuthResponse(response: Response): Promise<PublicUser> {
  const data = (await response.json()) as AuthResponse | { error?: string };

  if (!response.ok) {
    const message =
      'error' in data && typeof data.error === 'string'
        ? data.error
        : '認証に失敗しました';
    throw new Error(message);
  }

  return (data as AuthResponse).user;
}

export async function fetchMe(): Promise<PublicUser | null> {
  const response = await fetch('/api/auth/me', { credentials: 'include' });

  if (response.status === 401) {
    return null;
  }

  if (!response.ok) {
    throw new Error('認証状態の取得に失敗しました');
  }

  const data = (await response.json()) as AuthResponse;
  return data.user;
}

export async function registerUser(input: {
  email: string;
  password: string;
  displayName: string;
}): Promise<PublicUser> {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(input),
  });

  return parseAuthResponse(response);
}

export async function loginUser(input: {
  email: string;
  password: string;
}): Promise<PublicUser> {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(input),
  });

  return parseAuthResponse(response);
}

export async function logoutUser(): Promise<void> {
  const response = await fetch('/api/auth/logout', {
    method: 'POST',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('ログアウトに失敗しました');
  }
}

export async function fetchGameProgress(): Promise<string[]> {
  const response = await fetch('/api/gameProgress', { credentials: 'include' });

  if (response.status === 401) {
    return [];
  }

  if (!response.ok) {
    throw new Error('ゲーム進行の取得に失敗しました');
  }

  const data = (await response.json()) as { unlockedPages: string[] };
  return data.unlockedPages;
}

export async function saveGameProgress(unlockedPages: string[]): Promise<void> {
  const response = await fetch('/api/gameProgress', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ unlockedPages }),
  });

  if (!response.ok) {
    throw new Error('ゲーム進行の保存に失敗しました');
  }
}
