import { Injectable } from '@angular/core';
import {DataService} from '../genericService/data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService  extends DataService{

  constructor(http: HttpClient) {
    super(http);
  }
  setUrl(url: string): void{
    console.log('in setUrl');
    super.setUrl(url);
  }
}