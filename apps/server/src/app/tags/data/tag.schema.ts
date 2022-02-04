import { Schema } from 'mongoose';
import { ApplicationModules } from '../../../common/enums';

export const TagModelName = ApplicationModules.TAGS;

export const TagSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Books' },
    title: String,
  },
  {
    collection: TagModelName,
    timestamps: true,
  }
);
