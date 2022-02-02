import { Review, Tag } from '@book-tracker/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
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

  @Prop()
  reviews: Review[];

  @Prop()
  tags: Tag[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
