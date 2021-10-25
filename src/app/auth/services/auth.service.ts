import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { User } from '../models/User.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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
  signin( user: User ) : Observable<string>{
<<<<<<< HEAD
    const headers = new HttpHeaders(
      {
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Powered-By': 'Express'
      }
    );
    console.log(user)
    return this.http.post<any>(
      'http://127.0.0.1:3000/auth/login',
      user,
      {headers: headers, },
    ).pipe(
      catchError((err, _) => {
        console.log(err.error.text)
        return of("not")
      })
=======
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post('http://127.0.0.1:3000/auth/login', user,
      {headers: headers, responseType: 'text'}
>>>>>>> e43f972953f8ff8f0b2ead3360beb544f7360004
    )
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
