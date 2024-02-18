import { type RequestHandler } from 'express';
import { type PostType } from '../types';
import { type ResponseJson } from '@/types';
import { Type } from '../enums';

interface Query {
  page?: string;
}

// controller is expected to have url query with Query format
// ane return json with PostType[] format
const getAll: RequestHandler<object, ResponseJson<PostType[]>, object, Query> = (req, res) => {
  const { page } = req.query;
  res.status(200).json({
    data: [
      { id: 1, title: 'My post', description: `It's located on ${page ?? 1} page, and it's amazing`, type: Type.Feed },
    ],
    message: 'All post fetched',
  });
};

export default getAll;
