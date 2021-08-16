import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  constructor( private http: HttpClient ) { }
  
  findAll() {
  	return this.http.get<any>('./assets/contractors.json');
  }

}
