import { lists } from './schema';
import { session } from './auth';
import 'dotenv/config';

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
  server: {
    healthCheck: {
      path: '/health',
      data: () => ({
        status: 'healthy',
        timestamp: Date.now(),
        uptime: process.uptime(),
      }),
    },
  },
  ui: {
    isAccessAllowed: (context) => !!context.session?.data,
  },
  lists,
  session,
};

export default keystoneConfig;
