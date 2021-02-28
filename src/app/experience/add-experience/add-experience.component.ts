import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css'],
})
export class AddExperienceComponent implements OnInit {
  addExperienceForm: FormGroup = new FormGroup({
    company: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    joiningYear: new FormControl(''),
    endingYear: new FormControl(''),
    user: new FormControl(''),
  });

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private experienceService: ExperienceService
  ) {}

  username: string | null = this.activeRoute.snapshot.paramMap.get('username');

  ngOnInit(): void {
    this.addExperienceForm.patchValue({
      user: this.username,
    });
  }

  onsubmit(): void {
    this.experienceService.addExperience(this.addExperienceForm).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl(`user/${this.username}`);
      },
      (error) => console.log('Error Occured')
    );
  }
}
