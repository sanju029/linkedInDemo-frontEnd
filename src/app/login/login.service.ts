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
    login: 'http://localhost:8080/user',
    //signup: 'http://localhost:8080/signup',
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