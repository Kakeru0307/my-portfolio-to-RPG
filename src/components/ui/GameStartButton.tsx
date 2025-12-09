import { Link } from '@tanstack/react-router';

type GameNameProps = {
  name: String;
};
const GameStartButton = ({ name }: GameNameProps) => {
  return (
    <Link
      className="flex justify-center items-center space-x-2 border-2 p-2 rounded w-1/3 hover: bg-gray-900 mx-auto"
      to="/room"
    >
      <span>▶︎</span>
      <span>{name}</span>
    </Link>
  );
};

export default GameStartButton;
