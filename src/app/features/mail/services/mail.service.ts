import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from '../models/mail.model';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor( private http: HttpClient ) { }

  getAll() {
    return this.http.get('')
  }

  findOne( id: string ) {
    return this.http.get(`/${id}`)
  }

  create( mail: Mail ) {

  }

  edit( mail: Mail ) {

  }

  delete( id: string) {

  }
}
