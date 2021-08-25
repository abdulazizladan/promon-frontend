import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public newUserForm!: FormGroup;

  /**
   * 
   * @param fb 
   * @param userService
   */
  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  /**
   * first lifecycle hook
   */
  ngOnInit(): void {
    this.initializeForm();
  }

  /**
   * initialize form
   */
  initializeForm(): void {
    this.newUserForm = this.fb.group({
      email: (['', [Validators.email, Validators.required]]),
      firstName: (['', [Validators.required]]),
      lastName: (['', [Validators.required]]),
      password: (['', [Validators.required, Validators.minLength(8)]]),
      role: (['', [Validators.required]]),
      active: ([true])
    })
  }

  /**
   * 
   */
  submit(): void{
    const user = this.newUserForm.value;
    console.log(user)
    this.userService.create(user).subscribe(
      res => {
        console.log(res)
      }, err => {
        console.log(err)
      }
    );
  }

}
