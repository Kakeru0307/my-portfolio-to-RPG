import type { PublicUser } from '@/types/auth';

export type RouterContext = {
  auth: {
    user: PublicUser | null;
  };
};
