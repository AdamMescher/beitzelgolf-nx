module.exports = ({ env }) => ({
  proxy: true,
  port: env('PORT'),
  url: env('HEROKU_URL'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
