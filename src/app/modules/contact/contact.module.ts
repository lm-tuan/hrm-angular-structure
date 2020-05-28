import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { CustomerListComponent } from '../customers/customer-list/customer-list.component';
import { CustomerRoutingModule } from '../customers/customer.routing';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';
import { ContactItemComponent } from './contact-item/contact-item.component';


@NgModule({
    imports: [
        SharedModule,
        ContactRoutingModule,
        MaterialModule,
    ],
    exports: [],
    providers: [],
    declarations: [ContactItemComponent],
})
export class ContactModule {}
