import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from '../skills.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css'],
})
export class AddSkillComponent implements OnInit {
  addSkillForm: FormGroup = new FormGroup({
    technology: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    user: new FormControl(''),
  });

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private skillService: SkillService
  ) {}

  username: string | null = this.activeRoute.snapshot.paramMap.get('username');

  ngOnInit(): void {
    this.addSkillForm.patchValue({
      user: this.username,
    });
  }

  onsubmit(): void {
    this.skillService.addSkill(this.addSkillForm).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl(`user/${this.username}`);
      },
      (error) => console.log('Error Occured')
    );
  }
}
