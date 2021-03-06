import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//environment variable
import { environment } from 'src/environments/environment';

//Project Model
import { Project } from '../models/project.model';

//State Model
import { State } from '../models/states.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
/**
   *
   * @param http
   */
 constructor( private http: HttpClient ) { }

 /**
  *
  * @returns
  */
 getAll(): Observable<Project[]> {
   const ext = 'projects'
   const url: string = `${environment.apiUrl}/${ext}`;
   return this.http.get<Project[]>(url)
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
 create( project: Project): Observable<Project>{
  const ext = 'projects'
   const url: string = `${environment.apiUrl}/${ext}`;
  return this.http.post<Project>(url, project)
 }

/**
 *
 * @param id
 * @param project
 * @returns
 */
 edit(id: string, project: Project): Observable<Project> {
  return this.http.put<Project>(`http://127.0.0.1:3000/projects/${id}`, project)
}

 /**
  *
  * @returns
  */
 getStates(): Observable<State[]> {
   return this.http.get<State[]>('./assets/nigeria.json')
 }
}
