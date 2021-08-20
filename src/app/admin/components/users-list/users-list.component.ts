import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public users: any
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'role', 'active']

  /**
   * Class constructor
   * @param dialog
   */
  constructor(
    public dialog: MatDialog,
    private userService: UserService
    ) { }

  /**
   * First lifecycle hook
   */
  ngOnInit(): void {
    this.getUsers()
  }

  /**
   * get users from database
   */
  private getUsers(): void {
    this.userService.findAll().subscribe(
      res => {
        this.users = res;
        console.log()
      },
      err => {
        console.log(err)
      }
    )
  }

  /**
   * Open dialog
   */
  openDialog(): void {
    this.dialog.open(AddUserComponent)
  }

}
