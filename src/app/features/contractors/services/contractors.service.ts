import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//environment variable
import { environment } from 'src/environments/environment';

//Contractor model
import { Contractor } from '../models/contractor.model';

@Injectable({
  providedIn: 'root'
})
export class ContractorsService {
  /**
   *
   * @param http
   */
  constructor( private http: HttpClient ) { }

   /**
  *
  * @returns
  */
  findAll(): Observable<Contractor[]> {
    const url: string = `environment.apiUrl+'/projects`;
    return this.http.get<Contractor[]>('http://127.0.0.1:3000/contactors')
  }

 /**
  *
  * @param id
  * @returns
  */
  findOne(id: string): Observable<Contractor> {
    return this.http.get<Contractor>(`http://127.0.0.1:3000/contactors/${id}`)
  }

  create(contractor: Contractor): Observable<Contractor> {
    return this.http.post<Contractor>(`http://127.0.0.1:3000/contactors`, contractor)
  }

  edit(id: string, contractor: Contractor): Observable<Contractor> {
    return this.http.put<Contractor>(`http://127.0.0.1:3000/contactors/${id}`, contractor)
  }

  remove(id: string) {
    return this.http.delete<Contractor>(`http://127.0.0.1:3000/contactors/${id}`)
  }
}
