import { Component, OnInit } from '@angular/core';
import { Experience } from './experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Array<Experience> = [
    {
        //id: "1",
        role: "Software Developer",
        company: "Google",
        duration: "2 years",
        joiningYear: "Jan 2019",
        endingYear: "Jan 2021",
    },
    {
        //id: "1",
        role: "Software Developer",
        company: "Google",
        duration: "2 years",
        joiningYear: "Jan 2019",
        endingYear: "Jan 2021",
    },
];

edit : boolean=true;
add : boolean=true;

  constructor() { }

  ngOnInit(): void {

    
  }

  updateExperience(){
    
  }

}
