import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';

@NgModule({
  imports: [
    CommonModule,
    LaunchRoutingModule,
    SharedModule
  ],
  declarations: [LaunchDetailComponent]
})
export class LaunchModule { }
