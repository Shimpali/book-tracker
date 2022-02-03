import { Review, Tag } from '@book-tracker/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as mongooseSchema } from 'mongoose';
import { ApplicationModules } from '../../../common/enums';

export const BooksModelName = ApplicationModules.BOOKS;

@Schema()
export class Book {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  description: string;

  @Prop()
  cover: string;

  @Prop()
  pageCount: number;

  @Prop()
  link: string;

  @Prop()
  genre: string;

  @Prop({ type: [{ type: mongooseSchema.Types.ObjectId, ref: 'Review' }] })
  reviews: Review[];

  @Prop({ type: [{ type: mongooseSchema.Types.ObjectId, ref: 'Tag' }] })
  tags: Tag[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
