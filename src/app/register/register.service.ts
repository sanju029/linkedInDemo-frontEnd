import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  // getEmployee(id: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/createUser`, user);
  }

  // updateEmployee(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }

  // deleteEmployee(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }

  // getEmployeesList(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}`);
  // }
}