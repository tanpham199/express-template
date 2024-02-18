import { type RequestHandler } from 'express';
import { type ResponseJson } from '@/types';
import Post, { type PostType } from '../model';

interface Query {
  debug: string;
}

// controller is expected to have url query with Query format
// ane return json with PostType[] format
const getAll: RequestHandler<object, ResponseJson<PostType[]>, object, Query> = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({
    data: posts,
    message: 'All post fetched',
  });
};

export default getAll;
