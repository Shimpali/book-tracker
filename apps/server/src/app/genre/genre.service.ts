import { Injectable } from '@nestjs/common';

@Injectable()
export class GenreService {
  getData(): { message: string } {
    return { message: 'Genre' };
  }
}
