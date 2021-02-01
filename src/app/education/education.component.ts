import { Component, OnInit } from '@angular/core';
import { Education } from './education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: Array<Education> = [
    {
        college: "Sri Chaitanya",
        duration: "2 years",
        joiningYear: "may 2015",
        endingYear: "june 2017",
        course: "Intermediate",
        grade: "8.5",
    },
    {
        college: "Vasavi College of Engineering",
        duration: "2 years",
        joiningYear: "june 2017",
        endingYear: "une 2021",
        course: "Bachelor of Engineering",
        grade: "8.52"
    },
];

edit : boolean=true;
add : boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
  updateEducation(){
    
    //console.log(this.signupForm.value);
    //service update needed
  }

}
