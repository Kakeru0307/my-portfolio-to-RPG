import { createLazyFileRoute } from '@tanstack/react-router';
import SafeSuspense from '@/components/SafeSuspense';
import LinkPageList from './-components/LinkPageList';

const Home = () => {
  return (
    <SafeSuspense>
      <div className="flex flex-col justify-start gap-16 min-h-[calc(100vh-200px)] p-2">
        <LinkPageList />
      </div>
    </SafeSuspense>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Home,
});
