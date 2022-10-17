import { Injectable } from '@angular/core';
import { LoginCredentials } from '../models/credentials.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  login( credentials: LoginCredentials ) {
    return this.http.post('', 2)
  }
}
