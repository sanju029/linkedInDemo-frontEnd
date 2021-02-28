import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditSkillComponent } from './edit-skill/edit-skill.component';
import { SkillsRoutingModule } from './skills-routing.module';

@NgModule({
  declarations: [SkillsComponent, AddSkillComponent, EditSkillComponent],
  imports: [CommonModule, ReactiveFormsModule, SkillsRoutingModule],
  exports: [SkillsComponent],
})
export class SkillsModule {}
