import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExperienceService } from '../experience.service';
import { Experience } from '../experience';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css'],
})
export class EditExperienceComponent implements OnInit {
  @Input()
  experienceDetail!: Experience;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private experienceService: ExperienceService
  ) {}

  id: string | null = this.activeRoute.snapshot.paramMap.get('id');

  editExperienceForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    company: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    joiningYear: new FormControl(''),
    endingYear: new FormControl(''),
    user: new FormControl(''),
  });

  username = localStorage.getItem('user');

  ngOnInit(): void {
    if (this.id && this.username) {
      this.experienceService.getExperience(this.id).subscribe(
        (data: Experience) => {
          this.experienceDetail = data;
          console.log(data);
          this.editExperienceForm.patchValue({
            id: this.activeRoute.snapshot.params.id,
            company: this.experienceDetail.company,
            role: this.experienceDetail.role,
            joiningYear: this.experienceDetail.joiningYear,
            endingYear: this.experienceDetail.endingYear,
            user: this.username,
          });
        },
        (error) => console.log('error')
      );
    }
  }

  onDelete(): void {
    if (this.id) {
      this.experienceService.deleteExperience(this.id).subscribe(
        (data) => {
          this.router.navigateByUrl(`user/${this.username}`);
        },
        (error) => console.log('Error occurred')
      );
    }
  }

  onSubmit(): void {
    if (this.id) {
      this.experienceService
        .updateExperience(this.editExperienceForm, this.id)
        .subscribe(
          (data) => {
            this.router.navigateByUrl(`user/${this.username}`);
          },
          (error) => console.log('Error occurred')
        );
    }
  }
}
