import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//environment variable
import { environment } from 'src/environments/environment';

//Project Model
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor( private http: HttpClient ) { }

  findAll(): Observable<Project[]> {
    const url: string = `environment.apiUrl+'/projects`;
    return this.http.get<Project[]>('./assets/projects.json')
  }

  findOne( id: string ): Observable<Project> {
    const url: string = environment.apiUrl+'/projects/'+id;
    return this.http.get<Project>(url)
  }
}
