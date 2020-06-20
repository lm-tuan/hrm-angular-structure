import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { EmployeeAddRoutingModule } from './employee-add.routing';
import { EmployeeAddComponent } from './employee-add/employee-add.component';


@NgModule({
    imports: [
        SharedModule,
        EmployeeAddRoutingModule,
        MaterialModule,
    ],
    exports: [],
    providers: [],
    declarations: [EmployeeAddComponent],
})
export class EmployeeAddModule {}
