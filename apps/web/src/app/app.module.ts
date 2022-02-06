import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@book-tracker/material';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, MaterialModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
