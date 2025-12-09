import ActiveField from '@/hooks/ActiveField';
import ChatMessage from '@/components/ChatMessage';
import Title from '@/components/ui/Title';
import GameStartButton from '@/components/ui/GameStartButton';
import { linkItems } from '@/constants/link';
import { message } from '@/constants/message';

const LinkPageList = () => {
  return (
    <>
      <Title name="鈴木翔の歴史" description="~My history~" />
      <GameStartButton name="冒険を始める" />
      <div className="flex flex-col mt-8 w-full">
        <ActiveField linkitems={linkItems} />
      </div>
      <div className="flex space-x-2 border-2 p-2">
        <ChatMessage message={message.FirstContact} />
      </div>
    </>
  );
};

export default LinkPageList;
