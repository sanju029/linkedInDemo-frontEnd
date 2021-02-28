import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ExperienceModule } from 'src/app/experience/experience.module';
import { EducationModule } from 'src/app/education/education.module';
import { SkillsModule } from '../../skills/skills.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    ProfileRoutingModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    ExperienceModule,
    EducationModule,
    SkillsModule
  ],
  exports: [ProfileComponent],
})
export class ProfileModule {}
