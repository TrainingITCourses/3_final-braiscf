import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';

const routes: Routes = [{
  path: '',
  component: LaunchDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchRoutingModule { }
