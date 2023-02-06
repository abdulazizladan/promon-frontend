import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';
import { login } from '../../store/auth.actions';
import { AuthState } from '../../store/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup  = new FormGroup({})

  constructor(
    private authStore: Store<{ auth: AuthState }>,
    private fb: FormBuilder,
    private readonly authService: AuthService,
    private router: Router ) { }

  ngOnInit(): void {
    this.initializeLoginForm()
  }

  initializeLoginForm() {
    this.loginForm = this.fb.group({
      email: ['admin@promon.com', [Validators.email, Validators.required]],
      password: ['password', [Validators.required]]
    })
  }

  login() {
    const loginData = this.loginForm.value;
    this.authStore.dispatch(login());
    this.router.navigate(['admin'])
  }

}
