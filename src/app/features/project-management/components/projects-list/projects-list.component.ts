import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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

  projects$: Observable< ProjectsState >;

  constructor( private store: Store<{ projects: ProjectsState }>, private dialog: MatDialog ) {
    this.projects$ = this.store.select((projects) => projects.projects).pipe();
  };

  displayedColumns: string[] = ['id', 'title', 'description', 'dateAdded', 'status', 'action'];

  ngOnInit(): void {
    this.store.dispatch(loadProjects())
  }

  openAddProjectDialog() {
    this.dialog.open(AddProjectComponent, {width: '480px'})
  }

}
