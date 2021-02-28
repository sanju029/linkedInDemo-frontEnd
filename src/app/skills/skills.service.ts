import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Skills } from './skills';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  addSkill(skillsForm: FormGroup): Observable<any> {
    return this.http.post<Skills>(
      'http://localhost:8080/createSkill',
      JSON.stringify(skillsForm.value),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  getSkills(username: string): Observable<any> {
    return this.http.get<Array<Skills>>(
      `http://localhost:8080/skill/${username}`,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  getSkill(id: string): Observable<any> {
    return this.http.get<Skills>(`http://localhost:8080/skillById/${id}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  updateSkill(skillsForm: FormGroup, id: string): Observable<any> {
    return this.http.put<Skills>(
      `http://localhost:8080/skill/${id}`,
      JSON.stringify(skillsForm.value),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  deleteSkill(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/skill/${id}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  constructor(private http: HttpClient) {}
}
