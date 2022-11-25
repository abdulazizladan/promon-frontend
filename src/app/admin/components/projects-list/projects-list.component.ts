import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectsService } from '../../services/projects.service';
import { AddProjectComponent } from '../add-project/add-project.component';
import { State } from '../../store/reducers/admin.reducer';
import { Observable, tap } from 'rxjs';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  projects$: Observable<Project[]> | undefined;
  proj = [];
  projects: any;

  constructor(
    private dialog: MatDialog,
    private store: Store<State>,
    private projectsService: ProjectsService
    ) { }

  ngOnInit(): void {
    this.getProjects()
    console.log(this.projects$)
  }

  getProjects() {
    this.projects = this.store.select((state) => state.projects);
  }

  openAddProjectDialog() {
    this.dialog.open(AddProjectComponent, {
      width: '480px',
      panelClass: 'panel'
    })
  }

}
