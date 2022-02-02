import { Genre } from './genre';
import { Review } from './review';
import { Tag } from './tag';

export interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
  cover: string;
  pageCount: number;
  link: string;
  genre: Genre;
  reviews: Review[];
  tags: Tag[];
}
