import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEducationComponent } from './add-education/add-education.component';
import { EditEducationComponent } from './edit-education/edit-education.component';

const routes: Routes = [
  {
    path: 'education/:username',
    component: AddEducationComponent,
  },
  {
    path: 'education/:username/edit/:id',
    component: EditEducationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationRoutingModule {}
