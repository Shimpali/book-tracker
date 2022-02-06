import { User } from '@book-tracker/models';
import { Document, Types } from 'mongoose';

export interface UserDocument extends User, Document {
  __v: number;
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
