import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';
import { ExperienceRoutingModule } from './experience-routing.module';

@NgModule({
  declarations: [
    ExperienceComponent,
    AddExperienceComponent,
    EditExperienceComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, ExperienceRoutingModule],
  exports: [ExperienceComponent],
})
export class ExperienceModule {}
