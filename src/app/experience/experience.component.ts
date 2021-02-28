import { Component, OnInit } from '@angular/core';
import { Experience } from './experience';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experiences!: Array<Experience>;
  experience!: Experience;

  username = localStorage.getItem('user');

  constructor(
    private experienceService: ExperienceService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  onAdd(): void {
    console.log(this.username);
    this.router.navigateByUrl(`experience/${this.username}`);
  }

  routeToEdit(id: number): void {
    console.log(id);
    this.router.navigateByUrl(`experience/${this.username}/edit/${id}`);
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('user');

    if (this.username) {
      this.experienceService.getExperiences(this.username).subscribe(
        (data: Array<Experience>) => {
          console.log(data);
          this.experiences = data;
        },
        (error) => console.log(error)
      );
    }
  }
}
