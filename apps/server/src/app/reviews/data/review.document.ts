import { Review } from '@book-tracker/models';
import { Document, Types } from 'mongoose';

export interface ReviewDocument extends Review, Document {
  __v: number;
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
