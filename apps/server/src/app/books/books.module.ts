import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BookRepository } from './data/book.repository';
import { BookSchema, BooksModelName } from './data/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BooksModelName, schema: BookSchema }]),
  ],
  controllers: [BooksController],
  providers: [BooksService, BookRepository],
})
export class BooksModule {}
