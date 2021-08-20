import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectComponent } from '../add-project/add-project.component';
import { ProjectService } from '../../services/project.service';
//import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  public projects: any;
  displayedColumns: string[] = ['title', 'description', 'location']

  /**
   * Class Constructor
   * @param dialog
   */
  constructor(
    public dialog: MatDialog,
    private projectService: ProjectService
  ) {

  }

  /**
   * Open Dialog
   */
  openDialog() {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: '800px'
    });
  }

  /**
   * First lifecycle hook
   */
  ngOnInit(): void {
    this.getProjects()
  }

  getProjects(): void{
    this.projectService.findAll().subscribe(
      res => {
        this.projects = res;
      },
      err => {
        console.log(err)
      }
    )
  }

}
