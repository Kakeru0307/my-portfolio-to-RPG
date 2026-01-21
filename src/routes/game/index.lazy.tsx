import { createLazyFileRoute } from '@tanstack/react-router';

import ChatMessage from '@/components/ChatMessage';
import BWOctagon from '@/components/ui/BWOctagon';
import RandomTips from '@/components/utils/RandomTips';
import { message } from '@/constants/message';
import { Tips } from '@/constants/message';

const Game = () => {
  return (
    <div className="flex flex-col justify-between p-4">
      <div className="text-4xl m-8 text-center">
        <h1>My Favorite Games</h1>
      </div>

      <div className="flex flex-col items-center bg-gray-800 border-2 p-5 max-w-3xl mx-auto m-4">
        <ChatMessage message={message.MyGameStatus} />
      </div>

      <div className="flex flex-col items-center bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-xl shadow-2xl p-6 max-w-3xl mx-auto m-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-transparent pointer-events-none" />
        <div className="flex items-center space-x-3 mb-8 border-b-2 border-gray-700 pb-2 px-10 z-10">
          <h3 className="text-2xl font-bold tracking-widest text-gray-200">
            GAME LIST
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full justify-items-center">
          <BWOctagon text="Valorant" status="regular" />
          <BWOctagon text="Tarkov" status="recent" />
          <BWOctagon text="Apex" status="past" />
          <BWOctagon text="LoL" status="recent" />
          <BWOctagon text="MineCraft" status="regular" />
          <BWOctagon text="Fortnite" status="past" />
          <BWOctagon text="PokemonSeries" status="past" />
          <BWOctagon text="AmoungUs" status="regular" />
          <BWOctagon text="SF6" status="recent" />
        </div>
      </div>
      <RandomTips Tips={Tips} />
    </div>
  );
};

export const Route = createLazyFileRoute('/game/')({
  component: Game,
});
