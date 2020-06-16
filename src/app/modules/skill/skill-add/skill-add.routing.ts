import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSkillComponent } from './add-skill/add-skill.component';

export const routes: Routes = [
  {
    path: '',
    component: AddSkillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillAddRoutingModule {}
