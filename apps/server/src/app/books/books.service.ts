import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  getData(): { message: string } {
    return { message: 'Books' };
  }
}
