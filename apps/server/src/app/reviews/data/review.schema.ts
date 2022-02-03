import { User } from '@book-tracker/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as mongooseSchema } from 'mongoose';
import { ApplicationModules } from '../../../common/enums';

export const ReviewsModelName = ApplicationModules.REVIEWS;

@Schema()
export class Review {
  @Prop({ type: mongooseSchema.Types.ObjectId, ref: 'Book' })
  bookId: mongooseSchema.Types.ObjectId;

  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop({ type: mongooseSchema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
