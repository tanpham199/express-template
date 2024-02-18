import { type RequestHandler } from 'express';
import { type ResponseJson } from '@/types';
import { type Type } from '../enums';
import Post, { type PostType } from '../model';

interface Body {
  title: string;
  description: string;
  type: Type;
}

interface Query {
  debug: string;
}

// controller is expected to have body with Body format, url query with Query format
// ane return json with PostType format
const create: RequestHandler<object, ResponseJson<PostType>, Body, Query> = async (req, res) => {
  const { body } = req;
  const newPost = new Post(body);
  await newPost.save();
  res.status(200).json({
    data: newPost,
    message: 'Post created',
  });
};

export default create;
