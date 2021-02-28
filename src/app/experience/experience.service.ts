import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DataService } from '../genericService/data.service';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Experience } from './experience';

@Injectable({
  providedIn: 'root',
})
// export class ExperienceService extends DataService{
//   constructor(http: HttpClient) {
//     super(http);
//   }

//   setUrl(url: string): void {
//     super.setUrl(url);
//   }
// }
export class ExperienceService {
  addExperience(experienceForm: FormGroup): Observable<any> {
    return this.http.post<Experience>(
      'http://localhost:8080/createExperience',
      JSON.stringify(experienceForm.value),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  getExperiences(username: string): Observable<any> {
    return this.http.get<Array<Experience>>(
      `http://localhost:8080/experience/${username}`,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  getExperience(id: string): Observable<any> {
    return this.http.get<Experience>(
      `http://localhost:8080//experienceById/${id}`,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  updateExperience(experienceForm: FormGroup, id: string): Observable<any> {
    return this.http.put<Experience>(
      `http://localhost:8080/experience/${id}`,
      JSON.stringify(experienceForm.value),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  deleteExperience(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/experience/${id}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  constructor(private http: HttpClient) {}
}
