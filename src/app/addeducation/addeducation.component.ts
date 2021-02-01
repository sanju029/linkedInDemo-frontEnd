import { Component, OnInit } from '@angular/core';
import { Education } from '../education/education';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-addeducation',
  templateUrl: './addeducation.component.html',
  styleUrls: ['./addeducation.component.css']
})
export class AddeducationComponent implements OnInit {

  constructor() { }
  education: Education=new Education();

  ngOnInit(): void {
  }
  addEducation(){
    //service needed
  }

}
