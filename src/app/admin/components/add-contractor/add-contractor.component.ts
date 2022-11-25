import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contractor',
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.scss']
})
export class AddContractorComponent implements OnInit {

  public addContractorForm: FormGroup = new FormGroup({});

  constructor( private fb: FormBuilder) { }

  initForm() {
    this.addContractorForm = this.fb.group({
      name: ['', Validators.required],
      contact: this.fb.group({
        email: ['', Validators.email],
        phone: ['', Validators.required],
        website: ['']
      })
    })
  }

  ngOnInit(): void {
    this.initForm()
  }

  submit() {
    console.log(this.addContractorForm.value)
  }

}
