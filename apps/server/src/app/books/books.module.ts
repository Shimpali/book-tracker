import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BookRepository } from './data/book.repository';
import { BookModelName, BookSchema } from './data/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BookModelName, schema: BookSchema }]),
  ],
  controllers: [BooksController],
  providers: [BooksService, BookRepository],
})
export class BooksModule {}
