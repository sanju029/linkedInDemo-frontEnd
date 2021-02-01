import { Skills } from '../skills/skills';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {

  constructor() { }

  skill: Skills=new Skills();

  ngOnInit(): void {
  }

  addSkill(){
    //service needed
  }

}
