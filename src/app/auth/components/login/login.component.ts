import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup  = new FormGroup({})

  constructor( private fb: FormBuilder, private readonly authService: AuthService ) { }

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
    //console.log(this.loginForm.value);
  }

}
