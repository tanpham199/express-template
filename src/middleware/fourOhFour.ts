import { type ResponseJson } from '@/types';
import { type RequestHandler } from 'express';

const fourOhFour: RequestHandler<undefined, ResponseJson> = (_req, res) => {
  res.status(404).json({ message: 'not found', data: null });
};

export default fourOhFour;
