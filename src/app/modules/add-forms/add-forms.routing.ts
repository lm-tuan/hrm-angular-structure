import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFormCustomerComponent } from './add-form-customer/add-form-customer.component';

export const routes: Routes = [
  {
    path: '',
    component: AddFormCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddFormRoutingModule {}
