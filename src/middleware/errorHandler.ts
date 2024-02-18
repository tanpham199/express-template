import { type ErrorRequestHandler } from 'express';
import config from '../config';
import { type ResponseJson } from '@/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler<undefined, ResponseJson> = (error, req, res, next) => {
  console.error(error);
  res.status(500).json({
    message: config.nodeEnv === 'production' ? 'unknown error' : JSON.stringify(error),
    data: null,
  });
};

export default errorHandler;
