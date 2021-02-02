import { Component, OnInit } from '@angular/core';
import { EducationComponent } from '../../education/education.component';
import { ExperienceComponent } from '../../experience/experience.component';
import { SkillsComponent } from '../../skills/skills.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
