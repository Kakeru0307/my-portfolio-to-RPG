import { createLazyFileRoute } from '@tanstack/react-router';
import ChatMessage from '@/components/ChatMessage';
import BWOctagon from '@/components/ui/BWOctagon';
import { message } from '@/constants/message';

const Music = () => {
  return (
    <div className="flex flex-col justify-between p-4">
      <div className="text-4xl mb-8 text-center">
        <h1>My Favorite Musics</h1>
      </div>

      <div className="flex flex-col items-center bg-gray-800 border-2 p-5 max-w-3xl mx-auto m-4">
        <ChatMessage message={message.MyMusicStatus} />
      </div>

      <div className="flex flex-col items-center bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-xl shadow-2xl p-6 max-w-3xl mx-auto m-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-transparent pointer-events-none" />
        <div className="flex items-center space-x-3 mb-8 border-b-2 border-gray-700 pb-2 px-10 z-10">
          <h3 className="text-2xl font-bold tracking-widest text-gray-200">
            ARTIST LIST
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full justify-items-center">
          <BWOctagon text="Orangestar" status="regular" />
          <BWOctagon text="キタニタツヤ" status="recent" />
          <BWOctagon text="RadWinps" status="recent" />
          <BWOctagon text="WANIMA" status="regular" />
          <BWOctagon text="ヨルシカ" status="regular" />
          <BWOctagon text="Lisa" status="regular" />
          <BWOctagon text="Mrs GreenApple" status="regular" />
          <BWOctagon text="藍井エイル" status="regular" />
          <BWOctagon text="菅原圭" status="recent" />
        </div>
      </div>

      <div className="flex flex-col items-center bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-xl shadow-2xl p-6 max-w-3xl mx-auto m-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-transparent pointer-events-none" />
        <div className="flex items-center space-x-3 mb-8 border-b-2 border-gray-700 pb-2 px-10 z-10">
          <h3 className="text-2xl font-bold tracking-widest text-gray-200">
            MUSIC LIST
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full justify-items-center">
          <BWOctagon text="ソラニン" status="regular" />
          <BWOctagon text="ノーチラス" status="regular" />
          <BWOctagon text="Alice In 冷凍庫" status="regular" />
          <BWOctagon text="ともに" status="past" />
          <BWOctagon text="クラクラ" status="recent" />
          <BWOctagon text="Courage" status="recent" />
          <BWOctagon text="ANIMA" status="recent" />
          <BWOctagon text="カタオモイ" status="past" />
          <BWOctagon text="Soranji" status="past" />
        </div>
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute('/music/')({
  component: Music,
});
