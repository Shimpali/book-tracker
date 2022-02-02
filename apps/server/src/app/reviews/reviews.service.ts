import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewsService {
  getData(): { message: string } {
    return { message: 'Reviews' };
  }
}
