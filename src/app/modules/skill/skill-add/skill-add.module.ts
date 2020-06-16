import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { SkillAddRoutingModule } from './skill-add.routing';
import { AddSkillComponent } from './add-skill/add-skill.component';


@NgModule({
    declarations: [
    AddSkillComponent
],
    imports: [
        SharedModule,
        SkillAddRoutingModule,
        MaterialModule,
    ],
    exports: [],
    providers: [],
})
export class SkillAddModule {}
