import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { ReviewsModule } from './reviews/reviews.module';
import { TagsModule } from './tags/tags.module';
import { UsersModule } from './users/users.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [BooksModule, ReviewsModule, TagsModule, UsersModule, GenreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
