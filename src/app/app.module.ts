import { NgModule,ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule} from './login/login.module';
//import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent} from './register/register.component';
import { AddskillComponent } from './addskill/addskill.component';
import { AddexperienceComponent } from './addexperience/addexperience.component';
import { AddeducationComponent } from './addeducation/addeducation.component'
//import {PostService} from './services/post.service';
//import {GlobalErrorHandler} from './customerrors/global-error-handler';


@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    UserComponent,
    RegisterComponent,
    AddskillComponent,
    AddexperienceComponent,
    AddeducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ 
    // {provide: ErrorHandler, useClass: GlobalErrorHandler}],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
