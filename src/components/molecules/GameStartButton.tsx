import { Link } from '@tanstack/react-router';

type GameStartButtonProps = {
  name: string;
  to: string;
};

const GameStartButton = ({ name, to }: GameStartButtonProps) => {
  return (
    <Link
      className="flex justify-center items-center space-x-2 border-2 p-2 rounded w-1/3 hover:bg-gray-900 mx-auto"
      to={to}
    >
      <span>▶︎</span>
      <span>{name}</span>
    </Link>
  );
};

export default GameStartButton;
