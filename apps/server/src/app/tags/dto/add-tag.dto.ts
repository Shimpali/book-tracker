import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';

export class AddTagDto {
  @IsMongoId()
  @ApiProperty()
  bookId: string;

  @IsString()
  @ApiProperty()
  title: string;
}
