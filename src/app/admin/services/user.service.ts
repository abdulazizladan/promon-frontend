import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>('./assets/users.json')
  }
}
