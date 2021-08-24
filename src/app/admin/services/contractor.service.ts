import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  /**
   * Constructor
   * @param http
   */
  constructor( private http: HttpClient ) { }

  /**
   *
   * @returns array of contractors
   */
  findAll() {
  	return this.http.get<any>('http://localhost:8080/api/contractors');
  }

}
