import { Schema } from 'mongoose';
import { ApplicationModules } from '../../../common/enums';

export const ReviewModelName = ApplicationModules.REVIEWS;

export const ReviewSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Books' },
    title: String,
    content: String,
    user: { type: Schema.Types.ObjectId, ref: 'Users' },
  },
  {
    collection: ReviewModelName,
    timestamps: true,
  }
);
