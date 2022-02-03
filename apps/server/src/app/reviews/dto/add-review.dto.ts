import { User } from '@book-tracker/models';
import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString, ValidateNested } from 'class-validator';

export class AddReviewDto {
  @IsMongoId()
  @ApiProperty()
  bookId: string;

  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  content: string;

  @ValidateNested()
  @ApiProperty()
  user: User;
}
