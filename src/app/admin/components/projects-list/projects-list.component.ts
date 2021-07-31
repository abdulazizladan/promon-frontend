import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectComponent } from '../add-project/add-project.component';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  /**
   * Class Constructor
   * @param dialog
   */
  constructor(
    public dialog: MatDialog ) {

  }

  /**
   * Open Dialog
   */
  openDialog() {
    const dialogRef = this.dialog.open(AddProjectComponent);


  }

  /**
   * First lifecycle hook
   */
  ngOnInit(): void {
  }

}
