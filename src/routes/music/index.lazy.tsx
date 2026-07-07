import { createLazyFileRoute } from '@tanstack/react-router';

import MusicPage from '@/components/organisms/MusicPage';
import { artistList, musicList } from '@/constants/music';
import { message, Tips } from '@/constants/message';

const Music = () => {
  return (
    <MusicPage
      title="My Favorite Musics"
      statusMessage={message.MyMusicStatus}
      artists={artistList}
      musics={musicList}
      tips={Tips}
    />
  );
};

export const Route = createLazyFileRoute('/music/')({
  component: Music,
});
