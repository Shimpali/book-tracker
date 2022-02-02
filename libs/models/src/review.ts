import { User } from './user';

export interface Review {
  _id: string;
  bookId: string;
  title: string;
  content: string;
  user: User;
}
