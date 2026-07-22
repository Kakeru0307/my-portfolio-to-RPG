import { Link } from '@tanstack/react-router';

import type { NavItem } from '@/types/link';

type GlobalNavProps = {
  items: NavItem[];
};

const GlobalNav = ({ items }: GlobalNavProps) => {
  return (
    <div className="p-3 z-10 flex gap-2 justify-between sticky top-0 bg-gray-800 border-b">
      <div className="flex gap-2">
        {items.map((item) => (
          <Link key={item.to} to={item.to} className="[&.active]:font-bold">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GlobalNav;
