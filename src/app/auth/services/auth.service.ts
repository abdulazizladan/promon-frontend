import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  /**
   * Signin
   * @param user
   * @returns
   */
  signin( user: User ) : Observable<User>{
    return this.http.post<User> ('', user)
  }

  /**
   * Signup
   * @param user
   * @returns user
   */
  signup( user: User ) : Observable<User>{
    return this.http.post<User> ('', user)
  }


  /**
   *
   */
  signout() : void{

  }

}
