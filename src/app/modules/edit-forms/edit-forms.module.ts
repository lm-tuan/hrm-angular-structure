import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { CustomerListComponent } from '../customers/customer-list/customer-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditFormRoutingModule } from './edit-forms.routing';


@NgModule({
    imports: [
        SharedModule,
        EditFormRoutingModule,
        MaterialModule,
    ],
    exports: [],
    providers: [],
    declarations: [EditUserComponent],
})
export class EditFormModule {}
