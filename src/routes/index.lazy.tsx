import { createLazyFileRoute, Link } from '@tanstack/react-router';
import ChatMessage from '@/components/ChatMessage';
import SafeSuspense from '@/components/SafeSuspense';
import { linkItems } from '@/constants/link';
import { message } from '@/constants/message';
import ActiveField from '@/hooks/ActiveField';

const Home = () => {
  return (
    <SafeSuspense>
      <div className="flex flex-col justify-between min-h-[calc(100vh-200px)] p-2">
        <h1 className="text-4xl mb-8 text-center">
          鈴木翔の歴史 <br /> ~My history~
        </h1>
        <Link
          className="flex items-center space-x-2 border-2 p-2 rounded w-1/2 hover: bg-gray-900"
          to="/room"
        >
          <span>▶︎</span>
          <span>冒険をする</span>
        </Link>
        <div className="grid grid-cols-1 gap-4 mt-8">
          <ActiveField linkitems={linkItems} />
        </div>
        <div className="flex items-center space-x-2 border-2 p-2 rounded mt-auto z-20">
          <ChatMessage message={message.FirstContact} />
        </div>
      </div>
    </SafeSuspense>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Home,
});
