import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectComponent } from '../add-project/add-project.component';
import { ProjectsService } from '../../services/projects.service';
import { tap } from 'rxjs/operators';
import { AdminState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { loadProjects } from '../../actions/project.actions';
import { Project } from '../../models/project.model';
import { noop } from 'rxjs';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  public projects!: Project[];

  displayedColumns: string[] = ['title', 'description', 'location']

   /**
   * Class Constructor
   * @param dialog
   */
    constructor(
      public dialog: MatDialog,
      private projectService: ProjectsService,
      private store: Store<AdminState>
    ) {

    }

  /**
   * Open add-project Dialog
   */
   openDialog() {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      maxWidth: '640px'
    });
  }

  /**
   * First lifecycle hook
   */
  ngOnInit(): void {
    this.getProjects()
  }

  /**
   *
   */
  private getProjects(): void{
    this.projectService.findAll()
    .pipe(
      tap( projects => {
        this.projects = projects;
        this.store.dispatch(loadProjects())
      })
      ).subscribe(
        () => noop
    )
  }

}
