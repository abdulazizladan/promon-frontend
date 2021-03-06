import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '../../models/User.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { signin } from '../../auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  submitted:  boolean = false;
  loginFailed: boolean = false;
  public signinForm: FormGroup = new FormGroup({});

  /**
   *
   * @param authService Class Constructor
   * @param fb
   * @param user
   */
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private store: Store<User> ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  /**
   * Initialize signin form
   */
  initializeForm() {
    this.signinForm = this.fb.group({
      username: ['admin', Validators.required],
      password: ['admin', Validators.required]
    })
  }

  /**
   * Signin
   */
  signin(): void {
    const user = this.signinForm.value
    this.submitted = true;
    this.authService.signin(user)
    .pipe()
    .subscribe(
      res => {
        localStorage.setItem('token', res)
        this.store.dispatch(signin({user}))
        this.router.navigate(['/admin'])
      },
      err => {
        setTimeout( () => {
          this.submitted = false;
        }, 5000)

      }
    )
    /**setTimeout( () => {
      this.authService.signin(user)
      .pipe()
      .subscribe(
        res => {
          console.log(this.signinForm.value)
        },
        err => {
          this.submitted = false;
          this.router.navigate(['./admin'])
          //console.log("Unable to complete action")
        }
      )
    }, 5000)*/


  }

}
