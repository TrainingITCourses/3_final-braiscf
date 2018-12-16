import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { LaunchesListComponent } from './launches-list/launches-list.component';
import { OrderComponent } from './order/order.component';
import { StatusesListComponent } from './statuses-list/statuses-list.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CounterComponent,
    LaunchCardComponent,
    LaunchesListComponent,
    OrderComponent,
    StatusesListComponent,
    MessageComponent
  ],
  exports: [
    CounterComponent,
    LaunchCardComponent,
    LaunchesListComponent,
    OrderComponent,
    StatusesListComponent,
    MessageComponent
  ]
})
export class SharedModule { }
