import { createLazyFileRoute } from '@tanstack/react-router';
import { FaHome } from 'react-icons/fa';

const Game = () => {
  // const [onClick, setonClick] = useState(false);
  return (
    <div className="flex flex-col justify-between min-h-[calc(100vh-200px)] p-4">
      <div className="text-4xl mb-8 text-center">
        <h1>My Reconmend Games</h1>
      </div>
      <div className="flex flex-col items-center space-x-2 bg-gray-900 border-2 border-white p-5 w-1/2 mx-auto">
        <div className="flex items-center space-x-3 mb-4">
          <FaHome className="w-8 h-8" />
          <h3 className="text-2xl">Basic Info</h3>
        </div>
        <a></a>
      </div>
    </div>
  );
};
export const Route = createLazyFileRoute('/game/')({
  component: Game,
});
