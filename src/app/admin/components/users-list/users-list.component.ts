import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  /**
   * Class constructor
   * @param dialog
   */
  constructor(
    public dialog: MatDialog
    ) { }

  /**
   * First lifecycle hook
   */
  ngOnInit(): void {
  }

  /**
   * Open dialog
   */
  openDialog(): void {
    this.dialog.open(AddUserComponent)
  }

}
