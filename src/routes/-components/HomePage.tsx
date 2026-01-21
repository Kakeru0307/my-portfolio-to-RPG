import ActiveField from '@/components/ui/ActiveField';
import GameStartButton from '@/components/ui/GameStartButton';
import Title from '@/components/ui/Title';
import RandomTips from '@/components/utils/RandomTips';
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
      <RandomTips Tips={Tips} />
    </>
  );
};

export default HomePage;
