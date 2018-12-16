import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusFilterComponent } from './status-filter/status-filter.component';

const routes: Routes = [
  {
    path: '',
    component: StatusFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
