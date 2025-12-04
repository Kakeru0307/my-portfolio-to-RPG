const STATUS_COLORS: Record<string, string> = {
  recent: 'bg-green-500',
  regular: 'bg-yellow-500',
  past: 'bg-red-500',
  default: 'bg-gray-500',
};

type BWOctagonProps = {
  text: string;
  status?: 'recent' | 'regular' | 'past';
  onClick?: () => void;
};

const BWOctagon = ({ text, status = 'recent', onClick }: BWOctagonProps) => {
  const borderColor = STATUS_COLORS[status] || STATUS_COLORS.default;

  const clipPathValue =
    'polygon(10% 10%, 50% 0, 90% 10%, 100% 50%, 90% 90%, 50% 100%, 10% 90%, 0 50%)';

  const shapeStyle = {
    clipPath: clipPathValue,
  };

  return (
    <div
      onClick={onClick}
      className="inline-block filter drop-shadow-lg transition-transform hover:scale-105 cursor-pointer"
    >
      <div className={`${borderColor} p-[3px]`} style={shapeStyle}>
        <div
          className="bg-gray-900 flex flex-col items-center justify-center py-2 px-5"
          style={shapeStyle}
        >
          <div className="text-white font-bold tracking-wider mb-1 text-shadow-sm">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BWOctagon;
