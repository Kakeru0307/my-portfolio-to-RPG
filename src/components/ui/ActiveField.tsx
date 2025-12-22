import { LinkItem } from '@/constants/link';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';

interface ActiveFieldProps {
  linkItems: LinkItem[];
}

const ActiveField = ({ linkItems }: ActiveFieldProps) => {
  const [onTitle, setOnTitle] = useState('');

  const handleMouseEnter = (title: string) => {
    setOnTitle(title);
  };
  const handleMouseLeave = () => {
    setOnTitle('');
  };

  return (
    <div className="flex flex-col gap-4 w-2/5 mx-auto">
      {linkItems.map((item) => (
        <div
          key={item.title}
          onMouseEnter={() => handleMouseEnter(item.title)}
          onMouseLeave={handleMouseLeave}
          className="flex flex-col"
        >
          <Link
            className={`flex items-center justify-center space-x-2 border-2 p-2 rounded transition-colors duration-200 bg-gray-800 border-gray-500`}
            to={item.url}
          >
            <item.icon />
            <span>{item.title}</span>
          </Link>

          <div
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${onTitle === item.title ? 'opacity-100' : 'opacity-0 mt-0'}
            `}
          >
            <Link
              to={item.url}
              className="flex justify-center block bg-gray-800/80 text-gray-200 p-2 rounded text-sm border-t-2 border-gray-20"
            >
              {item.description}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveField;
