import Title from '@/components/atoms/Title';
import ChatMessage from '@/components/molecules/ChatMessage';
import MusicVideoListPanel from '@/components/molecules/MusicVideoListPanel';
import OctagonGridPanel from '@/components/molecules/OctagonGridPanel';
import RandomTips from '@/components/organisms/RandomTips';
import { ArtistItem, MusicItem } from '@/types/octagon';

type MusicPageProps = {
  title: string;
  statusMessage: string;
  artists: ArtistItem[];
  musics: MusicItem[];
  tips: string[];
};

const MusicPage = ({
  title,
  statusMessage,
  artists,
  musics,
  tips,
}: MusicPageProps) => {
  return (
    <div className="flex flex-col justify-between p-4">
      <Title name={title} />

      <div className="flex flex-col items-center bg-gray-800 border-2 p-5 max-w-3xl mx-auto m-4">
        <ChatMessage message={statusMessage} />
      </div>

      <OctagonGridPanel title="ARTIST LIST" items={artists} />
      <MusicVideoListPanel title="MUSIC LIST" items={musics} />

      <RandomTips tips={tips} />
    </div>
  );
};

export default MusicPage;
