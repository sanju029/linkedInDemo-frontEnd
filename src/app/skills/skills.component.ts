import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Skills } from './skills';
import {NgForm} from '@angular/forms';
import {SkillService} from './skills.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills!: Array<Skills>;
  skill!: Skills;

  username = localStorage.getItem('user');

  constructor(
    private skillService: SkillService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  onAdd(): void {
    console.log(this.username);
    this.router.navigateByUrl(`skill/${this.username}`);
  }

  routeToEdit(id: number): void {
    console.log(id);
    this.router.navigateByUrl(`skill/${this.username}/edit/${id}`);
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('user');

    if (this.username) {
      this.skillService.getSkills(this.username).subscribe(
        (data: Array<Skills>) => {
          console.log(data);
          this.skills = data;
        },
        (error) => console.log(error)
      );
    }
  }
}
