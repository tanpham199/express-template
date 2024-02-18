import mongoose from 'mongoose';
import app from './app';
import config from './config';

mongoose
  .connect(config.mongo.url, {
    dbName: config.mongo.dbName,
  })
  .then(() => {
    app.listen(config.port, () => {
      console.info(`🚀 ${config.name} ${config.version} 🚀`);
      console.info(`🚀 Connected to MongoDB with ${config.mongo.dbName} database 🚀`);
      console.info(`🚀 Listening on ${config.port} with NODE_ENV=${config.nodeEnv} 🚀`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
