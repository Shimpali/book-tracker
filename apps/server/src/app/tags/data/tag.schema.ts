import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as mongooseSchema } from 'mongoose';
import { ApplicationModules } from '../../../common/enums';

export const TagsModelName = ApplicationModules.TAGS;

@Schema()
export class Tag {
  @Prop({ type: mongooseSchema.Types.ObjectId, ref: 'Book' })
  bookId: mongooseSchema.Types.ObjectId;

  @Prop()
  title: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);
