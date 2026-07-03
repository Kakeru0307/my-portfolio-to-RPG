import ActiveField from '@/components/organisms/ActiveField';
import GameStartButton from '@/components/molecules/GameStartButton';
import Title from '@/components/atoms/Title';
import RandomTips from '@/components/organisms/RandomTips';
import { linkItems } from '@/constants/link';
import { Tips } from '@/constants/message';

const HomePage = () => {
  return (
    <>
      <Title name="鈴木翔の歴史" description="~My history~" />
      <GameStartButton name="冒険を始める" />
      <div className="flex flex-col mt-8 w-full">
        <ActiveField linkItems={linkItems} />
      </div>
      <RandomTips tips={Tips} />
    </>
  );
};

export default HomePage;
