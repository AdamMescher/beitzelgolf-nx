import { config } from '@keystone-6/core';
import { lists } from './schema';
import { withAuth, session } from './auth';
import 'dotenv/config';

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url:
        process.env.DATABASE_URL ||
        `postgres://${process.env.PG_USER}@localhost/beitzelgolf_keystone`,
      enableLogging: true,
      useMigrations: true,
      idField: { kind: 'uuid' },
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);
