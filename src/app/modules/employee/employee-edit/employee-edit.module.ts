import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeEditRoutingModule } from './employee-edit.routing';


@NgModule({
    imports: [
        SharedModule,
        EmployeeEditRoutingModule,
        MaterialModule,
    ],
    exports: [],
    providers: [],
    declarations: [EmployeeEditComponent],
})
export class EmployeeEditModule {}
