import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { AddEducationComponent } from './add-education/add-education.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEducationComponent } from './edit-education/edit-education.component';
import { EducationRoutingModule } from './education-routing.module';

@NgModule({
  declarations: [
    EducationComponent,
    AddEducationComponent,
    EditEducationComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, EducationRoutingModule],
  exports: [EducationComponent],
})
export class EducationModule {}
