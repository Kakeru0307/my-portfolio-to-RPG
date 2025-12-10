import { createLazyFileRoute } from '@tanstack/react-router';
import SafeSuspense from '@/components/SafeSuspense';
import HomePage from './-components/HomePage';

const Home = () => {
  return (
    <SafeSuspense>
      <HomePage />
    </SafeSuspense>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Home,
});
