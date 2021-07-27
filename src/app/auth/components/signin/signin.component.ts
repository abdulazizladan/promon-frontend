import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '../../models/User.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public signinForm!: FormGroup;

  constructor( private authService: AuthService, private fb: FormBuilder, private user: Store<User> ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  signin(): void {
    const user = this.signinForm.value
    this.authService.signin(user).subscribe(
      res => {
        console.log(this.signinForm.value)
      },
      err => {
        console.log("Unable to complete action")
      }
    )

  }

}
