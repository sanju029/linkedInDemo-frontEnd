import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotFoundError } from '../customerrors/not-found-error';
import { BadRequest } from '../customerrors/bad-request';
import { AppError } from '../customerrors/app-error';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  setUrl(url: string): void {
    this.url = url;
    console.log(this.url);
  }

  get(): Observable<any> {
    return this.http.get(this.url, this.httpOptions).pipe(
      catchError((err) => {
        return this.handleError;
      })
    );
  }

  create(resource: any): Observable<any> {
    return this.http
      .post(this.url, resource, this.httpOptions)
      .pipe(catchError((err) => this.handleError(err)));
  }

  update(resource: any): Observable<any> {
    return this.http
      .post(this.url, resource, this.httpOptions)
      .pipe(catchError((err) => this.handleError(err)));
  }

  delete(id: any): Observable<any> {
    return this.http
      .delete(this.url + '/' + id, this.httpOptions)
      .pipe(catchError((err) => this.handleError(err)));
  }

  private handleError(err: Response): Observable<any> {
    if (err.status === 404) {
      return throwError(new NotFoundError());
    }
    if (err.status === 400) {
      return throwError(new BadRequest());
    }
    return throwError(new AppError(err));
  }
}
