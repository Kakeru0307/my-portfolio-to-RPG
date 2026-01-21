import { useEffect, useState } from 'react';

import { ChatMessage } from '../ChatMessage';

export default function RandomTips({ Tips }: { Tips: string[] }) {
  const [randomTips, setRandomTips] = useState<string>('');

  const pickRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * Tips.length);
    setRandomTips(Tips[randomIndex]);
  };

  useEffect(() => {
    pickRandomMessage();
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2 mx-auto w-1/2 border-2 p-2 mt-8">
      {randomTips && <ChatMessage message={randomTips} />}
    </div>
  );
}
