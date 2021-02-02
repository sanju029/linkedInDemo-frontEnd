import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from './login/login.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent} from './register/register.component';
import { AddskillComponent } from './addskill/addskill.component';
import { AddexperienceComponent } from './addexperience/addexperience.component';
import { AddeducationComponent } from './addeducation/addeducation.component';
import {ProfileComponent} from './profile/profile/profile.component'



const routes: Routes = [
 
  {
    path: 'education/:username',
    component: EducationComponent
  },
  {
    path: 'experience/:username',
    component: ExperienceComponent
  },
  {
   path: 'user/:username',
   component: ProfileComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'skills/:id',
    component: SkillsComponent
  },
  {
    path: "",
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
