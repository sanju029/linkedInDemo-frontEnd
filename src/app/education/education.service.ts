import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../genericService/data.service';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Education } from './education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {

  addEducation(educationForm: FormGroup): Observable<any> {
    return this.http.post<Education>(
      'http://localhost:8080/createEducation',
      JSON.stringify(educationForm.value),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  getEducations(username: string): Observable<any> {
    return this.http.get<Array<Education>>(
      `http://localhost:8080/education/${username}`,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  getEducation(id: string): Observable<any> {
    return this.http.get<Education>(
      `http://localhost:8080/educationById/${id}`,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  updateEducation(educationForm: FormGroup, id: string): Observable<any> {
    return this.http.put<Education>(
      `http://localhost:8080/education/${id}`,
      JSON.stringify(educationForm.value),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  deleteEducation(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/education/${id}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  constructor(private http: HttpClient) {}
}
