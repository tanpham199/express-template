import { type Type } from './enums';

export interface PostType {
  id: number;
  title: string;
  description: string;
  type: Type;
}
