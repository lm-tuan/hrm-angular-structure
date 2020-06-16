import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';


@NgModule({
    declarations: [
DashboardItemComponent],
    imports: [
        SharedModule,
        DashboardRoutingModule,
        MaterialModule,
    ],
    exports: [],
    providers: [],
})
export class DashboardModule {}
