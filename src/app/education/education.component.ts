import { Component, OnInit } from '@angular/core';
import { Education } from './education';
import { EducationService} from './education.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: any;
education: Education=new Education();

edit : boolean=true;
add : boolean=true;
username: string="";

  constructor(private educationService: EducationService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.activeRoute.snapshot.params.username;
    console.log(this.username);
    this.educationService.setUrl('http://localhost:8080/education/' + this.username);
    this.educationService.get().subscribe(
      (data) => {
        console.log(data);
        this.educations = data;
      });
  }
  updateEducation(){
    
    //console.log(this.signupForm.value);
    //service update needed
  }


}
