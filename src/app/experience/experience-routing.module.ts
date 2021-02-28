import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';

const routes: Routes = [
  {
    path: 'experience/:username',
    component: AddExperienceComponent,
  },
  {
    path: 'experience/:username/edit/:id',
    component: EditExperienceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceRoutingModule {}
