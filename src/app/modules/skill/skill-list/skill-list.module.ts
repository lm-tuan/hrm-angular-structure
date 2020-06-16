import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { SkillsComponent } from './skills/skills.component';
import { SkillsRoutingModule } from './skill-list.routing';


@NgModule({
    declarations: [
    SkillsComponent
],
    imports: [
        SharedModule,
        SkillsRoutingModule,
        MaterialModule,
    ],
    exports: [],
    providers: [],
})
export class SkillsModule {}
