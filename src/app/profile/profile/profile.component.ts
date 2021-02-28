import { Component, OnInit } from '@angular/core';
import { EducationComponent } from '../../education/education.component';
import { ExperienceComponent } from '../../experience/experience.component';
import { SkillsComponent } from '../../skills/skills.component';
import { ProfileService } from './profile.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { User } from 'src/app/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  id = 0;
  user!: User;
  username = '';

  constructor(
    private profileService: ProfileService,
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.username = this.activeRoute.snapshot.params.username;
    this.profileService.setUrl('http://localhost:8080/user/' + this.username);
    this.profileService.get().subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }
}
