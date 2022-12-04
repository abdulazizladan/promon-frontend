import { Injectable } from '@angular/core';
import { LoginCredentials } from '../models/credentials.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   *
   * @param http instance of the http client
   */
  constructor(private http: HttpClient) { }

  /**
   *
   * @param credentials
   * @returns
   */
  login( credentials: LoginCredentials ): Observable<string> {
    const baseUrl = environment.baseUrl;
    return this.http.post<string>(`${baseUrl}/auth/login`, credentials)
  }
}
