import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public newUserForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.newUserForm = this.fb.group({
      email: (['', [Validators.email, Validators.required]]),
      first_name: (['', [Validators.required]]),
      last_name: (['', [Validators.required]])
    })
  }

  submit(): void{

  }

}
