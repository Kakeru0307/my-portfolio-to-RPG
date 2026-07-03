import { useEffect, useState } from 'react';

import ChatMessage from '@/components/molecules/ChatMessage';

type RandomTipsProps = {
  tips: string[];
};

const RandomTips = ({ tips }: RandomTipsProps) => {
  const [randomTip, setRandomTip] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setRandomTip(tips[randomIndex]);
  }, [tips]);

  return (
    <div className="flex items-center justify-center space-x-2 mx-auto w-1/2 border-2 p-2 mt-8">
      {randomTip && <ChatMessage message={randomTip} />}
    </div>
  );
};

export default RandomTips;
