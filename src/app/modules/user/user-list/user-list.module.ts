import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { UsersRoutingModule } from './user-list.routing';
import { ListUserComponent } from './list-user/list-user.component';


@NgModule({
    declarations: [
ListUserComponent],
    imports: [
        SharedModule,
        UsersRoutingModule,
        MaterialModule,
    ],
    exports: [],
    providers: [],
})
export class UsersModule {}
