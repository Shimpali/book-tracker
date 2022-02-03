import { Schema } from 'mongoose';
import { ApplicationModules } from '../../../common/enums';
import { ReviewSchema } from '../../reviews/data/review.schema';
import { TagSchema } from '../../tags/data/tag.schema';

export const BookModelName = ApplicationModules.BOOKS;

export const BookSchema = new Schema(
  {
    title: String,
    author: String,
    cover: String,
    pageCount: Number,
    link: String,
    genre: String,
    reviews: [{ type: ReviewSchema, ref: 'Reviews' }],
    tags: [{ type: TagSchema, ref: 'Tags' }],
  },
  {
    collection: BookModelName,
    timestamps: true,
  }
);
