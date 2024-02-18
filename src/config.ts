import packageJson from '../package.json';

/**
 * Pattern for config is:
 * key: process.env['KEY'] ?? default
 */
const config = {
  version: packageJson.version,
  name: packageJson.name,
  description: packageJson.description,

  nodeEnv: (process.env.NODE_ENV ?? 'development') as 'test' | 'development' | 'production',
  port: process.env.PORT ?? 4000,

  mongo: {
    url: process.env.MONGO_URL ?? '',
    dbName: process.env.MONGO_DEFAULT_DATABASE ?? '',
  },

  clientCorsOrigins: {
    test: '*',
    development: ['http://localhost:3000', 'http://localhost:3001'],
    production: [/\.vercel\.app$/, /\.a2asoftware\.com$/],
  },
};

export default config;
