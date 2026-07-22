import { createLazyFileRoute } from '@tanstack/react-router';

import LockedPage from '@/components/organisms/LockedPage';

function Product() {
  return <LockedPage />;
}

export const Route = createLazyFileRoute('/product/')({
  component: Product,
});
