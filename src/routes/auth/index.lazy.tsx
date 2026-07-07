import { createLazyFileRoute } from '@tanstack/react-router';

import AuthPage from '@/components/organisms/AuthPage';

function Auth() {
  const { redirect } = Route.useSearch();

  return <AuthPage redirectTo={redirect} />;
}

export const Route = createLazyFileRoute('/auth/')({
  component: Auth,
});
