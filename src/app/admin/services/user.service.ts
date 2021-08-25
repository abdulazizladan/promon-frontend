import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    return this.http.post<User>('http://localhost:8080/api/users', user, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }
}
