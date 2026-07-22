import { createLazyFileRoute } from '@tanstack/react-router';

import FavoriteListPage from '@/components/organisms/FavoriteListPage';
import { gameList } from '@/constants/game';
import { message, Tips } from '@/constants/message';

const Game = () => {
  return (
    <FavoriteListPage
      title="My Favorite Games"
      statusMessage={message.MyGameStatus}
      sections={[{ heading: 'GAME LIST', items: gameList }]}
      tips={Tips}
    />
  );
};

export const Route = createLazyFileRoute('/game/')({
  component: Game,
});
