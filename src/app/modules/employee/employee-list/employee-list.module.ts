import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeListRoutingModule } from './employee-list.routing';


@NgModule({
    declarations: [
        EmployeeListComponent,
    ],
    imports: [
        SharedModule,
        EmployeeListRoutingModule,
        MaterialModule,
    ],
    exports: [],
    providers: [],
})
export class EmployeeListModule {}
