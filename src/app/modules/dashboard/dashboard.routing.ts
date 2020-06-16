import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
