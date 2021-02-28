import { Component, OnInit } from '@angular/core';
import { Education } from './education';
import { EducationService} from './education.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educations!: Array<Education>;
  education!: Education;

  username = localStorage.getItem('user');

  constructor(
    private educationService: EducationService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  onAdd(): void {
    console.log(this.username);
    this.router.navigateByUrl(`education/${this.username}`);
  }

  routeToEdit(id: number): void {
    console.log(id);
    this.router.navigateByUrl(`education/${this.username}/edit/${id}`);
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('user');

    if (this.username) {
      this.educationService.getEducations(this.username).subscribe(
        (data: Array<Education>) => {
          console.log(data);
          this.educations = data;
        },
        (error) => console.log(error)
      );
    }
  }
}
