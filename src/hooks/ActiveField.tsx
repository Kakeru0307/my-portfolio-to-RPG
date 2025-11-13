import { LinkItem } from '@/constants/link';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';

interface ActiveFieldProps {
  linkitems: LinkItem[];
}
const ActiveField = ({ linkitems }: ActiveFieldProps) => {
  const [onTitle, setOnTitle] = useState('');
  const handleMouseEnter = (title: string) => {
    setOnTitle(title);
  };
  const handleMouseLeave = () => {
    setOnTitle('');
  };
  return (
    <div>
      {linkitems.map((item) => (
        <div key={item.title}>
          <Link
            className="negativeField"
            to={item.url}
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
          >
            <item.icon />
            <span>{item.title}</span>
          </Link>
          {onTitle === item.title && (
            <div className="descriptionField">{item.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ActiveField;
