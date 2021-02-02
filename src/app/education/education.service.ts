import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../genericService/data.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService extends DataService{
  constructor(http: HttpClient) {
    super(http);
  }

  setUrl(url: string): void {
    super.setUrl(url);
  }
}