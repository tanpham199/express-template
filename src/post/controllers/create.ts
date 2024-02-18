import { type RequestHandler } from 'express';
import { type PostType } from '../types';
import { type ResponseJson } from '@/types';
import { type Type } from '../enums';

interface Params {
  serviceId: string;
}

interface Body {
  title: string;
  description: string;
  type: Type;
}

interface Query {
  debug: string;
}

// controller is expected to have :serviceId url params, body with Body format, url query with Query format
// ane return json with PostType format
const create: RequestHandler<Params, ResponseJson<PostType>, Body, Query> = (req, res) => {
  const { body } = req;
  const newPost = {
    id: 2,
    ...body,
  };
  res.status(200).json({
    data: newPost,
    message: 'Post created',
  });
};

export default create;
