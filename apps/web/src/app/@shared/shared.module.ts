import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@book-tracker/material';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, TranslateModule, CommonModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent],
})
export class SharedModule {}
