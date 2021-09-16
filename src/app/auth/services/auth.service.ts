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
   *
   * @returns login status as boolean
   */
  isLoggedIn(): boolean{
    return true;
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
    //clear login credentials
    //route to login
  }

  /**
   * 
   */
  resetPassword( oldPassword: string, newPassword: string) : Observable<string>{
    return this.http.put<string>('', oldPassword)
  }

}
