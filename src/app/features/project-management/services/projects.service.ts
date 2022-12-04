import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor( private http: HttpClient ) { }

  /**
   *
   * @returns list of all projects
   */
  getAll(): Observable<Project[]> {
    const baseUrl: string = environment.baseUrl;
    return this.http.get<Project[]>(`${baseUrl}/projects`)
  }

  /**
   *
   * @param id: string
   * @returns single project by ID
   */
  findByID( id: string ): Observable<Project> {
    const baseUrl: string = environment.baseUrl;
    return this.http.get<Project>(`${baseUrl}/project/${id}`)
  }

  /**
   *
   * @param project: Project
   * @returns status after creating a project
   */
  create( project: Project ): Observable<Project> {
    const baseUrl: string = environment.baseUrl;
    return this.http.post<Project>(`${baseUrl}/project`, project)
  }

  update( id: string, project: Project ): Observable<Project> {
    const baseUrl: string = environment.baseUrl;
    return this.http.patch<Project>(`${baseUrl}/project/${id}`, project)
  }

  delete( id: string): Observable<Project> {
    const baseUrl: string = environment.baseUrl;
    return this.http.delete<Project>(`${baseUrl}/project/${id}`)
  }
}
