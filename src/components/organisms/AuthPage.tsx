import { useState } from 'react';

import { useNavigate } from '@tanstack/react-router';

import BWOctagon from '@/components/atoms/BWOctagon';
import FormField from '@/components/molecules/FormField';
import { AUTH_MESSAGES } from '@/constants/auth';
import { useAuth } from '@/routes/auth/-hooks/useAuth';
import type { AuthTab } from '@/types/auth';

type AuthPageProps = {
  redirectTo: string;
};

const tabClassName = (active: boolean) =>
  `px-4 py-2 border-b-2 ${active ? 'border-white font-bold' : 'border-transparent text-gray-400'}`;

const AuthPage = ({ redirectTo }: AuthPageProps) => {
  const navigate = useNavigate();
  const {
    register,
    login,
    isRegistering,
    isLoggingIn,
    authError,
    clearAuthError,
  } = useAuth();

  const [activeTab, setActiveTab] = useState<AuthTab>('register');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleTabChange = (tab: AuthTab) => {
    setActiveTab(tab);
    clearAuthError();
  };

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'displayName') setDisplayName(value);
  };

  const handleSubmit = async () => {
    clearAuthError();

    try {
      if (activeTab === 'register') {
        await register({ email, password, displayName });
      } else {
        await login({ email, password });
      }

      if (redirectTo === '/game') {
        await navigate({ to: '/game' });
      } else if (redirectTo === '/hiddenStory') {
        await navigate({ to: '/hiddenStory' });
      } else {
        await navigate({ to: '/' });
      }
    } catch {
      // authError は useAuth 側で表示
    }
  };

  const isSubmitting = activeTab === 'register' ? isRegistering : isLoggingIn;

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl mb-4">
        {activeTab === 'register'
          ? AUTH_MESSAGES.registerTitle
          : AUTH_MESSAGES.loginTitle}
      </h1>

      <div className="flex gap-4 mb-6">
        <button
          type="button"
          className={tabClassName(activeTab === 'register')}
          onClick={() => handleTabChange('register')}
        >
          {AUTH_MESSAGES.registerTab}
        </button>
        <button
          type="button"
          className={tabClassName(activeTab === 'login')}
          onClick={() => handleTabChange('login')}
        >
          {AUTH_MESSAGES.loginTab}
        </button>
      </div>

      <form className="flex flex-col text-center w-2/3 max-w-md">
        {activeTab === 'register' && (
          <FormField
            label={AUTH_MESSAGES.displayNameLabel}
            name="displayName"
            required
            value={displayName}
            onChange={handleFieldChange}
          />
        )}
        <FormField
          label={AUTH_MESSAGES.emailLabel}
          name="email"
          type="email"
          required
          value={email}
          onChange={handleFieldChange}
        />
        <FormField
          label={AUTH_MESSAGES.passwordLabel}
          name="password"
          type="password"
          required
          value={password}
          onChange={handleFieldChange}
        />
      </form>

      {authError && <p className="text-red-400 mt-4">{authError}</p>}

      <div className="p-4">
        <BWOctagon
          text={
            isSubmitting
              ? '処理中...'
              : activeTab === 'register'
                ? AUTH_MESSAGES.registerSubmit
                : AUTH_MESSAGES.loginSubmit
          }
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AuthPage;
