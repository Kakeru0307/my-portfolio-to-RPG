import { PageTransition } from '../components/PageTransition';
import GlobalNav from '@/components/organisms/GlobalNav';
import { navItems } from '@/constants/link';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from '@tanstack/react-router';

const RootComponent = () => {
  const location = useLocation();

  return (
    <>
      <GlobalNav items={navItems} />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </AnimatePresence>
      {import.meta.env.MODE === 'development' && <TanStackRouterDevtools />}
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
