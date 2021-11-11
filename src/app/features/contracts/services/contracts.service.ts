import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contract } from '../models/contract.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  constructor( private http: HttpClient ) { }

  /**
   *
   * @returns
   */
  public getAll(): Observable<Contract> {
    return this.http.get<Contract>(`http://127.0.0.1/3000/contracts`)
  }

  /**
   *
   * @param id
   * @returns
   */
  public findOne(id: string): Observable<Contract> {
    return this.http.get<Contract>(`http://127.0.0.1/3000/contracts/${id}`)
  }

  /**
   *
   * @param contract
   * @returns
   */
  public create(contract: Contract): Observable<Contract> {
    return  this.http.post<Contract>(`http://127.0.0.1/3000/contracts`, contract)
  }

  /**
   *
   * @param id
   * @param contract
   * @returns
   */
  public update(id: string, contract: Contract): Observable<Contract> {
    return this.http.put<Contract>(`http://127.0.0.1/3000/contracts/${id}`, contract)
  }

  public delete(id: string): Observable<Contract> {
    return this.http.delete<Contract>(`http://127.0.0.1/contracts/${id}`)
  }
}
