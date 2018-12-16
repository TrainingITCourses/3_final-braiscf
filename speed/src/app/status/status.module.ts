import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StatusFilterComponent } from './status-filter/status-filter.component';

@NgModule({
  imports: [
    CommonModule,
    StatusRoutingModule,
    SharedModule
  ],
  declarations: [StatusFilterComponent]
})
export class StatusModule { }
