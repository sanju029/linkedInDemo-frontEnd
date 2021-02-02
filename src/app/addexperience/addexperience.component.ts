import { Component, OnInit } from '@angular/core';
import { Experience } from '../experience/experience';

@Component({
  selector: 'app-addexperience',
  templateUrl: './addexperience.component.html',
  styleUrls: ['./addexperience.component.css']
})
export class AddexperienceComponent implements OnInit {

  constructor() { }

  experience : Experience=new Experience();
  ngOnInit(): void {
  }

  addExperience(){

  }

}
