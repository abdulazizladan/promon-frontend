import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from 'src/app/auth/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  /**
   *
   */
  findAll(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/api/users')
  }

  create( user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/api/users', user).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
