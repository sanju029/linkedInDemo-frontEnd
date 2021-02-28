import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css'],
})
export class AddEducationComponent implements OnInit {
  addEducationForm: FormGroup = new FormGroup({
    college: new FormControl('', Validators.required),
    joiningYear: new FormControl(''),
    endingYear: new FormControl(''),
    course: new FormControl(''),
    grade: new FormControl(''),
    user: new FormControl(''),
  });

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private educationService: EducationService
  ) {}

  username: string | null = this.activeRoute.snapshot.paramMap.get('username');

  ngOnInit(): void {
    this.addEducationForm.patchValue({
      user: this.username,
    });
  }

  onsubmit(): void {
    this.educationService.addEducation(this.addEducationForm).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl(`user/${this.username}`);
      },
      (error) => console.log('Error Occured')
    );
  }
}
