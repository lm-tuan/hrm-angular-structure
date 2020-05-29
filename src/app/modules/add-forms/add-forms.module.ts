import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { CustomerListComponent } from '../customers/customer-list/customer-list.component';
import { AddFormRoutingModule } from './add-forms.routing';
import { AddFormCustomerComponent } from './add-form-customer/add-form-customer.component';


@NgModule({
    imports: [
        SharedModule,
        AddFormRoutingModule,
        MaterialModule,
    ],
    exports: [],
    providers: [],
    declarations: [AddFormCustomerComponent],
})
export class AddFormModule {}
