import { StrictMode } from 'react';

import { RouterProvider, createRouter } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';

import './index.css';

import { routeTree } from './routeTree.gen';
import type { RouterContext } from './types/router';

const router = createRouter({
  routeTree,
  context: {
    auth: {
      user: null,
    },
  } satisfies RouterContext,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  return <RouterProvider router={router} />;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById('root')!;
document.documentElement.classList.add('dark');

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
