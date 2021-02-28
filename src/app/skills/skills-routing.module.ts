import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { EditSkillComponent } from './edit-skill/edit-skill.component';

const routes: Routes = [
  {
    path: 'skill/:username',
    component: AddSkillComponent,
  },
  {
    path: 'skill/:username/edit/:id',
    component: EditSkillComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}