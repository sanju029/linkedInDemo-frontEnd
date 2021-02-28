import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EducationService } from '../education.service';
import { Education } from '../education';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css'],
})
export class EditEducationComponent implements OnInit {
  @Input()
  educationDetail!: Education;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private educationService: EducationService
  ) {}

  id: string | null = this.activeRoute.snapshot.paramMap.get('id');

  editEducationForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    college: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),
    joiningYear: new FormControl(''),
    endingYear: new FormControl(''),
    grade: new FormControl(''),

    user: new FormControl(''),
  });

  username = localStorage.getItem('user');

  ngOnInit(): void {
    if (this.id && this.username) {
      this.educationService.getEducation(this.id).subscribe(
        (data: Education) => {
          this.educationDetail = data;
          console.log(data);
          this.editEducationForm.patchValue({
            id: this.activeRoute.snapshot.params.id,
            college: this.educationDetail.college,
            course: this.educationDetail.course,
            joiningYear: this.educationDetail.joiningYear,
            endingYear: this.educationDetail.endingYear,
            grade: this.educationDetail.grade,
            user: this.username,
          });
        },
        (error) => console.log('error')
      );
    }
  }

  onDelete(): void {
    if (this.id) {
      this.educationService.deleteEducation(this.id).subscribe(
        (data) => {
          this.router.navigateByUrl(`user/${this.username}`);
        },
        (error) => console.log('Error occurred')
      );
    }
  }

  onSubmit(): void {
    if (this.id) {
      this.educationService
        .updateEducation(this.editEducationForm, this.id)
        .subscribe(
          (data) => {
            this.router.navigateByUrl(`user/${this.username}`);
          },
          (error) => console.log('Error occurred')
        );
    }
  }
}
