import { useRouteContext, useRouter } from '@tanstack/react-router';
import { useState } from 'react';

import { loginUser, logoutUser, registerUser } from '@/lib/authClient';

export function useAuth() {
  const { auth } = useRouteContext({ from: '__root__' });
  const router = useRouter();
  const [authError, setAuthError] = useState<string | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const register = async (input: {
    email: string;
    password: string;
    displayName: string;
  }) => {
    setAuthError(null);
    setIsRegistering(true);

    try {
      await registerUser(input);
      await router.invalidate();
    } catch (error) {
      setAuthError(
        error instanceof Error ? error.message : '登録に失敗しました'
      );
      throw error;
    } finally {
      setIsRegistering(false);
    }
  };

  const login = async (input: { email: string; password: string }) => {
    setAuthError(null);
    setIsLoggingIn(true);

    try {
      await loginUser(input);
      await router.invalidate();
    } catch (error) {
      setAuthError(
        error instanceof Error ? error.message : 'ログインに失敗しました'
      );
      throw error;
    } finally {
      setIsLoggingIn(false);
    }
  };

  const logout = async () => {
    setIsLoggingOut(true);

    try {
      await logoutUser();
      await router.invalidate();
    } finally {
      setIsLoggingOut(false);
    }
  };

  return {
    user: auth.user,
    isLoading: false,
    isRegistering,
    isLoggingIn,
    isLoggingOut,
    register,
    login,
    logout,
    authError,
    clearAuthError: () => setAuthError(null),
  };
}
