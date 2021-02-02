import { Component, OnInit } from '@angular/core';
import { Experience } from './experience';
import {ActivatedRoute} from '@angular/router';
import { ExperienceService} from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: any;
  experience: Experience=new Experience();


  edit : boolean=true;
  add : boolean=true;
  username : string="";

  constructor(private experienceService: ExperienceService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.activeRoute.snapshot.params.username;
    this.experienceService.setUrl('http://localhost:8080/education/' + this.username);
    this.experienceService.get().subscribe(
      (data) => {
        console.log(data);
        this.experiences = data;
      });

    
  }

  updateExperience(){
    
  }

}
