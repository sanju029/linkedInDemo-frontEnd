import { Component, OnInit, ViewChild } from '@angular/core';
import { Skills } from './skills';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @ViewChild('f', { static: false }) signupForm: NgForm | undefined ;
  
  skills: Array<Skills> = [
    {
      technology : "Java",
      rating : "3",
        
    },
    {
      technology : "Python",
      rating : "3",
        
    },
];
  
edit : boolean=true;
add : boolean=true;

 
  constructor() { }

  ngOnInit(): void {
  }
  updateSkill(){
    
    //console.log(this.signupForm.value);
    //service update needed
  }
}
