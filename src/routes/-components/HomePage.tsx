import ActiveField from '@/components/organisms/ActiveField';
import GameStartButton from '@/components/molecules/GameStartButton';
import Title from '@/components/atoms/Title';
import RandomTips from '@/components/organisms/RandomTips';
import type { LinkItem } from '@/types/link';

type HomePageProps = {
  title: string;
  description: string;
  startButtonLabel: string;
  startButtonTo: string;
  linkItems: LinkItem[];
  tips: string[];
};

const HomePage = ({
  title,
  description,
  startButtonLabel,
  startButtonTo,
  linkItems,
  tips,
}: HomePageProps) => {
  return (
    <>
      <Title name={title} description={description} />
      <GameStartButton name={startButtonLabel} to={startButtonTo} />
      <div className="flex flex-col mt-8 w-full">
        <ActiveField linkItems={linkItems} />
      </div>
      <RandomTips tips={tips} />
    </>
  );
};

export default HomePage;
