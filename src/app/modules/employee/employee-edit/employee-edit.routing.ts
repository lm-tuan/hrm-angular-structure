import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeEditModule } from './employee-edit.module';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

export const routes: Routes = [
  {
    path: '',
     component: EmployeeEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeEditRoutingModule {}
