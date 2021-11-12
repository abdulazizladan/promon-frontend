import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supervisor } from '../models/supervisor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupervisorsService {

  constructor( private http: HttpClient) {

  }

  /**
   *
   * @returns
   */
  public getAll(): Observable<Supervisor[]>{
    return this.http.get<Supervisor[]>('http://127.0.0.1:3000/supervisors')
  }

  /**
   *
   * @param id
   * @returns
   */
  public findOne( id: string): Observable<Supervisor>{
    return this.http.get<Supervisor>(`http://127.0.0.1/supervisors/${id}`)
  }

  /**
   *
   * @param supervisor
   * @returns
   */
  public create( supervisor: Supervisor): Observable<Supervisor>{
    return this.http.post<Supervisor>(`http:127.0.0.1:3000/supervisors}`, supervisor)
  }

  /**
   *
   * @param id
   * @param supervisor
   * @returns
   */
  public update( id: string, supervisor: Supervisor): Observable<Supervisor>{
    return this.http.put<Supervisor>(`http:127.0.0.1:3000/supervisors/${id}`, supervisor)
  }

  /**
   *
   * @param id
   * @returns
   */
  public remove( id: string ): Observable<Supervisor>{
    return this.http.delete<Supervisor>(`127.0.0.1:3000/supervisors/${id}`);
  }
}
