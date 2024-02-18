import mongoose, { type Document } from 'mongoose';
import { Type } from './enums';
import { type ModelDate } from '@/types';

const { Schema } = mongoose;

export interface PostType extends ModelDate {
  title: string;
  description: string;
  type: Type;
}

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    enum: Type,
    default: Type.Feed,
  },
  createdTimestamp: {
    type: Number,
    default: Date.now,
  },
  updatedTimestamp: {
    type: Number,
    default: Date.now,
  },
});

postSchema.pre('save', function (next) {
  const currentDate = Date.now();
  if (this == null) {
    return;
  }
  this.updatedTimestamp = currentDate;
  if (!this.createdTimestamp) {
    this.createdTimestamp = currentDate;
  }

  next();
});

const Post = mongoose.model<PostType & Document>('Post', postSchema);

export default Post;
