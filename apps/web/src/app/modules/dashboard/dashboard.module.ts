import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@book-tracker/material';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [CommonModule, SharedModule, MaterialModule, DashboardRoutingModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
