import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { CustomerListComponent } from '../customers/customer-list/customer-list.component';
import { CustomerRoutingModule } from '../customers/customer.routing';


@NgModule({
    declarations: [
        CustomerListComponent,
    ],
    imports: [
        SharedModule,
        CustomerRoutingModule,
        MaterialModule,
    ],
    exports: [],
    providers: [],
})
export class CustomerModule {}
