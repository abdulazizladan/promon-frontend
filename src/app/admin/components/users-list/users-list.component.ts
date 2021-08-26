import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserService } from '../../services/user.service';
import { tap } from 'rxjs/operators';
import { AdminState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { User } from '../../models/user.model';
import { loadUsers } from '../../actions/user.actions';

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
    private userService: UserService,
    private store: Store<AdminState>
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
    this.userService.findAll()
    .pipe(
      tap( users => {
        console.log(users)
        this.users = users;
        this.store.dispatch(loadUsers())
      })
      ).subscribe(
        () => console.log('b')
    )
    //this.userService.findAll().subscribe(
     // res => {
     //   this.users = res;
     //   console.log()
     // },
     // err => {
     //   console.log(err)
     // }
    //)
  }

  /**
   * Open add-user dialog
   */
  openDialog(): void {
    this.dialog.open(AddUserComponent)
  }

}
