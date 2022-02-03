import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagRepository } from './data/tag.repository';
import { TagSchema, TagsModelName } from './data/tag.schema';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TagsModelName, schema: TagSchema }]),
  ],
  controllers: [TagsController],
  providers: [TagsService, TagRepository],
})
export class TagsModule {}
