import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}

// title = models.CharField((max_length = 255));
// cover = models.ImageField(
//   (null = True),
//   (upload_to = book_cover_image_file_path),
//   (blank = True)
// );
// author = models.CharField((max_length = 255), (blank = True), (null = True));
// page_count = models.PositiveIntegerField((blank = True), (null = True));
// link = models.URLField(
//   (max_length = 255),
//   (unique = True),
//   (blank = True),
//   (null = True)
// );
// reviews = models.ManyToManyField('Review');
// tags = models.ManyToManyField('Tag');
// user = models.ForeignKey(
//   settings.AUTH_USER_MODEL,
//   (on_delete = models.CASCADE)
// );
