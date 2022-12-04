import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//import { MatTableDataSource } from '@angular/material/table';
//import { Project } from '../../models/project.model';
import { ProjectsState } from '../../store/project.reducer';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectComponent } from '../add-project/add-project.component';
import { loadProjects } from '../../store/projects.actions';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  constructor( private store: Store<{ projects: ProjectsState }>, private dialog: MatDialog ) { };

  displayedColumns: string[] = ['id', 'title', 'description', 'dateAdded', 'status'];

  projects$: Observable<ProjectsState> = this.store.select('projects').pipe();

  ngOnInit(): void {
    this.store.dispatch(loadProjects())
  }

  openAddProjectDialog() {
    this.dialog.open(AddProjectComponent, {width: '480px'})
  }

}
