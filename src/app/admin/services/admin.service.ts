import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stats } from '../models/stats.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http: HttpClient ) {

  }

  getStats(): Observable<Stats> {
    const baseUrl = environment.baseUrl;
    return this.http.get<Stats>(`${baseUrl}`)
  }
}
