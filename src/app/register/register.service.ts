import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../user';
import { catchError, retry } from 'rxjs/operators';
import { DataService } from '../genericService/data.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService extends DataService {
  // private baseUrl = 'http://localhost:8080/user';

  constructor(http: HttpClient) {
    super(http);
  }

  // createUser(user: Object): Observable<any> {
  //   return this.http.post<User>('http://localhost:8080/user/createUser',JSON.stringify(user),
  //   {
  //     headers: new HttpHeaders({'Content-Type': 'application/json'})
  //   }
  //   )

  //   .pipe(
  //     retry(1),
  //     catchError(error=>this.errorHandling(error))
  //   );
  // }

  // errorHandling(error: any): Observable<never> {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(errorMessage);
  // }

  setUrl(url: string): void {
    console.log('in Url');
    super.setUrl(url);
  }
}
