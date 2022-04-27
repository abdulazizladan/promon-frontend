import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { User } from '../models/User.model';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, timeout, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  /**
   * Signin
   * @param user
   * @returns
   */
  signin( user: User ) : Observable<string>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post('http://127.0.0.1:3000/auth/login', user,
      {headers: headers, responseType: 'text'}
    ).pipe(retry(5), timeout(5000))
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
    return this.http.post<User> ('', user).pipe(

    )
  }


  /**
   *
   */
  signout() : void{
    localStorage.removeItem('token');
    this.router.navigateByUrl('./');
  }

  /**
   *
   */
  resetPassword( oldPassword: string, newPassword: string) : Observable<string>{
    return this.http.put<string>('', oldPassword).pipe()
  }

}
