import { NgModule } from "@angular/core";
import { ProfileComponent } from "./profile.component";
//import { ProfilePageRoutingModule } from "./profile-page-routing.module";
import { CommonModule } from "@angular/common";
import { EducationComponent } from "../../education/education.component";
import { ExperienceComponent } from "../../experience/experience.component";
import { SkillsComponent } from "../../skills/skills.component";

@NgModule({
    declarations: [
        ProfileComponent,
        EducationComponent,
        ExperienceComponent,
        SkillsComponent,
    ],
    imports: [ CommonModule],
    exports: [ProfileComponent],
})
export class ProfilePageModule {}