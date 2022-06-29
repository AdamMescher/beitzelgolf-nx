import { lists } from './schema';
import { session } from './auth';

const keystoneConfig = {
  db: {
    provider: 'postgresql',
    url:
      process.env.DATABASE_URL ||
      `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@localhost/beitzelgolf_keystone`,
    enableLogging: true,
    useMigrations: true,
    idField: { kind: 'uuid' },
  },
  ui: {
    isAccessAllowed: (context) => !!context.session?.data,
  },
  lists,
  session,
};

export default keystoneConfig;
