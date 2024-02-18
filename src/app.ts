import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import config from './config';
import errorHandler from './middleware/errorHandler';
import fourOhFour from './middleware/fourOhFour';
import post from './post';

const app = express();

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: config.clientCorsOrigins[config.nodeEnv] ?? '*',
  })
);

app.use('/post', post);

app.use(fourOhFour);
app.use(errorHandler);

export default app;
