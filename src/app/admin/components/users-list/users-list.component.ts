import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(AddUserComponent)
  }

}
