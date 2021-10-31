import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contract } from '../models/contract.model';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  constructor( private http: HttpClient ) { }

  public findAll(): Observable<Contract> {
    return this.http.get<Contract>(`127.0.0.1/3000/contracts`)
  }
}
