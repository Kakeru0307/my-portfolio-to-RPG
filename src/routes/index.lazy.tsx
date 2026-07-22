import { createLazyFileRoute } from '@tanstack/react-router';

import SafeSuspense from '@/components/SafeSuspense';
import { linkItems } from '@/constants/link';
import { Tips } from '@/constants/message';

import HomePage from './-components/HomePage';

const Home = () => {
  return (
    <SafeSuspense>
      <HomePage
        title="鈴木翔の歴史"
        description="~My history~"
        startButtonLabel="冒険を始める"
        startButtonTo="/room"
        linkItems={linkItems}
        tips={Tips}
      />
    </SafeSuspense>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Home,
});
