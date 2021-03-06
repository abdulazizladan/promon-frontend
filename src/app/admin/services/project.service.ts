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

  /**
   *
   * @param http
   */
  constructor( private http: HttpClient ) { }

  /**
   *
   * @returns
   */
  findAll(): Observable<Project[]> {
    const url: string = `environment.apiUrl+'/projects`;
    return this.http.get<Project[]>('http://localhost:8080/api/projects')
  }

  /**
   *
   * @param id
   * @returns
   */
  findOne( id: string ): Observable<Project> {
    const url: string = `environment.apiUrl+'/projects/'+id`;
    return this.http.get<Project>(url)
  }

  /**
   *
   * @param project
   */
  create( project: Project): void{

  }

  /**
   *
   * @returns
   */
  getStates(): Observable<any> {
    return this.http.get('./assets/nigeria.json')
  }
}
