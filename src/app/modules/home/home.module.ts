import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './page/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TutorialListComponent } from './page/tutorial-list/tutorial-list.component';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
    declarations: [
        HomeComponent,
        TutorialListComponent
    ],
    imports: [
        SharedModule,
        HomeRoutingModule,
        MaterialModule
    ],
    exports: [],
    providers: [],
})
export class HomeModule {}
