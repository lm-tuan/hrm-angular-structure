import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import {DetailUserRoutingModule } from './detail.routing';
import { DetailUserComponent } from './detail-user/detail-user.component';


@NgModule({
    declarations: [
    DetailUserComponent],
    imports: [
        SharedModule,
        DetailUserRoutingModule,
        MaterialModule,
    ],
    exports: [],
    providers: [],
})
export class DetailUserModule {}
