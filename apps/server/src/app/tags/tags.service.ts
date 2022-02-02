import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsService {
  getData(): { message: string } {
    return { message: 'Tags' };
  }
}
