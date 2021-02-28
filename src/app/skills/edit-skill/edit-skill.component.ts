import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SkillService } from '../skills.service';
import { Skills } from '../skills';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css'],
})
export class EditSkillComponent implements OnInit {
  @Input()
  skillDetail!: Skills;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private skillService: SkillService
  ) {}

  id: string | null = this.activeRoute.snapshot.paramMap.get('id');

  editSkillForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    technology: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),

    user: new FormControl(''),
  });

  username = localStorage.getItem('user');

  ngOnInit(): void {
    if (this.id && this.username) {
      this.skillService.getSkill(this.id).subscribe(
        (data: Skills) => {
          this.skillDetail = data;
          console.log(data);
          this.editSkillForm.patchValue({
            id: this.activeRoute.snapshot.params.id,
            technology: this.skillDetail.technology,
            rating: this.skillDetail.rating,
            user: this.username,
          });
        },
        (error) => console.log('error')
      );
    }
  }

  onDelete(): void {
    if (this.id) {
      this.skillService.deleteSkill(this.id).subscribe(
        (data) => {
          this.router.navigateByUrl(`user/${this.username}`);
        },
        (error) => console.log('Error occurred')
      );
    }
  }

  onSubmit(): void {
    if (this.id) {
      this.skillService.updateSkill(this.editSkillForm, this.id).subscribe(
        (data) => {
          this.router.navigateByUrl(`user/${this.username}`);
        },
        (error) => console.log('Error occurred')
      );
    }
  }
}
