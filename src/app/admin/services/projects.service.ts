import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor( private http: HttpClient ) { }

  getProjetcs(): Observable<Project[]> {
    const baseUrl = environment.baseUrl;
    const projects = this.http.get<Project[]>(``)
    return  of(Array())
  }

  getProjectByID(): Observable<Project> {
    const baseUrl = environment.baseUrl;
    const project = this.http.get<Project>(``)
    return project;
  }

  createProject( project: Project ) {
    const baseUrl = environment.baseUrl;
  }

  edit( id: string, project: Project ) {
    const baseUrl = environment.baseUrl;
  }

  delete( id: string ) {
    const baseUrl = environment.baseUrl;
  }
}
