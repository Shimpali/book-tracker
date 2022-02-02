import { User } from './user';

export interface Review {
  bookId: string;
  title: string;
  content: string;
  user: User;
}
