import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { TagDocument } from './data/tag.document';
import { AddTagDto } from './dto/add-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  async add(@Body() addTagDto: AddTagDto): Promise<TagDocument> {
    return this.tagsService.add(addTagDto);
  }

  @Get()
  @ApiBearerAuth()
  async findAll(): Promise<TagDocument[]> {
    return this.tagsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TagDocument> {
    return this.tagsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTagDto: UpdateTagDto
  ): Promise<TagDocument> {
    return this.tagsService.update(id, updateTagDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tagsService.remove(id);
  }
}
