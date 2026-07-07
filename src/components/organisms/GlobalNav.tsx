import { Link } from '@tanstack/react-router';

import { AUTH_MESSAGES } from '@/constants/auth';
import { navItems } from '@/constants/link';
import { useAuth } from '@/routes/auth/-hooks/useAuth';

const GlobalNav = () => {
  const { user, logout, isLoggingOut } = useAuth();

  const handleLogout = () => {
    void logout();
  };

  return (
    <div className="p-3 z-10 flex gap-2 justify-between sticky top-0 bg-gray-800 border-b">
      <div className="flex gap-2">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="[&.active]:font-bold"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {user ? (
          <>
            <span>
              {AUTH_MESSAGES.adventurerLabel}: {user.displayName}
            </span>
            <button
              type="button"
              className="underline"
              onClick={handleLogout}
              disabled={isLoggingOut}
            >
              {AUTH_MESSAGES.logout}
            </button>
          </>
        ) : (
          <Link to="/auth" search={{ redirect: '/' }} className="underline">
            {AUTH_MESSAGES.registerLink}
          </Link>
        )}
      </div>
    </div>
  );
};

export default GlobalNav;
