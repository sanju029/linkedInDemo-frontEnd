// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//     providedIn: 'root'
// })

// export class LoginService{

//     private baseUrl = 'http://localhost:8080/user';

//     constructor(private http : HttpClient) {}

//     getAllUsers() : Observable<any>
//     {
//         return this.http.get('${this.baseUrl}')
//     }
// }
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Login} from './login';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  baseurl = {
    login: 'http://localhost:8080/users',
    signup: 'http://localhost:8080/signup',
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  signInToken(loginForm: FormGroup): Observable<any> {
    return this.http.get<Login>(this.baseurl.login + `/${loginForm.value.username}`,  this.httpOptions)
      .pipe(
        retry(1),
        catchError(error => this.errorHandle(error))
      );
  }

  // signOut(): Observable<any> {
  //   return this.http.get<any>(this.baseurl + '/signout')
  //     .pipe(
  //       retry(1),
  //       catchError(this.errorHandle)
  //     );
  // }

  errorHandle(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}