import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailUserComponent } from './detail-user/detail-user.component';

export const routes: Routes = [
  {
    path: '',
    component: DetailUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailUserRoutingModule {}
