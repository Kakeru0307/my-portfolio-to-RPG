import BWOctagon from '@/components/atoms/BWOctagon';
import YoutubeEmbed from '@/components/atoms/YoutubeEmbed';
import { MusicItem } from '@/types/octagon';

type MusicVideoListPanelProps = {
  title: string;
  items: MusicItem[];
};

const chunkPairs = (items: MusicItem[]): MusicItem[][] => {
  const pairs: MusicItem[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    pairs.push(items.slice(i, i + 2));
  }
  return pairs;
};

const MusicVideoListPanel = ({ title, items }: MusicVideoListPanelProps) => {
  const pairs = chunkPairs(items);

  return (
    <div className="flex flex-col items-center bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-xl shadow-2xl p-6 max-w-5xl mx-auto m-4 w-full">
      <div className="flex items-center space-x-3 mb-8 border-b-2 border-gray-700 pb-2 px-10 z-10">
        <h3 className="text-2xl font-bold tracking-widest text-gray-200">
          {title}
        </h3>
      </div>

      <div className="flex flex-col gap-10 w-full">
        {pairs.map((pair) => (
          <div key={pair.map((item) => item.text).join('-')} className="flex flex-col gap-4 w-full">
            <div
              className={`grid gap-4 justify-items-center ${
                pair.length === 2 ? 'grid-cols-2' : 'grid-cols-1'
              }`}
            >
              {pair.map((item) => (
                <BWOctagon key={item.text} text={item.text} status={item.status} />
              ))}
            </div>

            <div
              className={`grid gap-4 ${
                pair.length === 2 ? 'grid-cols-2' : 'grid-cols-1 max-w-xl mx-auto w-full'
              }`}
            >
              {pair.map((item) => (
                <YoutubeEmbed
                  key={item.text}
                  youtubeUrl={item.youtubeUrl}
                  title={item.text}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicVideoListPanel;
