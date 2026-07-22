import Title from '@/components/atoms/Title';
import OctagonGridPanel from '@/components/molecules/OctagonGridPanel';
import ChatMessage from '@/components/molecules/ChatMessage';
import RandomTips from '@/components/organisms/RandomTips';
import { OctagonItem } from '@/types/octagon';

type FavoriteListSection = {
  heading: string;
  items: OctagonItem[];
};

type FavoriteListPageProps = {
  title: string;
  statusMessage: string;
  sections: FavoriteListSection[];
  tips: string[];
};

const FavoriteListPage = ({
  title,
  statusMessage,
  sections,
  tips,
}: FavoriteListPageProps) => {
  return (
    <div className="flex flex-col justify-between p-4">
      <Title name={title} />

      <div className="flex flex-col items-center bg-gray-800 border-2 p-5 max-w-3xl mx-auto m-4">
        <ChatMessage message={statusMessage} />
      </div>

      {sections.map((section) => (
        <OctagonGridPanel
          key={section.heading}
          title={section.heading}
          items={section.items}
        />
      ))}

      <RandomTips tips={tips} />
    </div>
  );
};

export default FavoriteListPage;
