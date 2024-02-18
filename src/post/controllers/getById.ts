import { type RequestHandler } from 'express';
import { type ResponseJson } from '@/types';
import Post, { type PostType } from '../model';

interface Params {
  postId: string;
}

interface Query {
  debug: string;
}

// controller is expected to have :postId url params, url query with Query format
// ane return json with PostType | null format
const getById: RequestHandler<Params, ResponseJson<PostType | null>, object, Query> = async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findById(postId);
  res.status(200).json({
    data: post,
    message: 'Post by ID fetched',
  });
};

export default getById;
