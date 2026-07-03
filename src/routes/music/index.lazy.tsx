import { createLazyFileRoute } from '@tanstack/react-router';

import FavoriteListPage from '@/components/organisms/FavoriteListPage';
import { artistList, musicList } from '@/constants/music';
import { message, Tips } from '@/constants/message';

const Music = () => {
  return (
    <FavoriteListPage
      title="My Favorite Musics"
      statusMessage={message.MyMusicStatus}
      sections={[
        { heading: 'ARTIST LIST', items: artistList },
        { heading: 'MUSIC LIST', items: musicList },
      ]}
      tips={Tips}
    />
  );
};

export const Route = createLazyFileRoute('/music/')({
  component: Music,
});
