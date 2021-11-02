import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContractorsService } from '../../services/contractors.service';

@Component({
  selector: 'app-add-contractor',
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.scss']
})
export class AddContractorComponent implements OnInit {

  public contractorForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private contractorService: ContractorsService ) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.contractorForm = this.fb.group({
      name: ['', Validators.required],
      rcNumber: ['', Validators.required],
      website: ['', Validators.required],
      username: ['', Validators.required],
      user: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        contact: this.fb.group({
          email: ['', Validators.required],
          phoneNumbers: this.fb.array([this.createPhoneNumber])
        })
      })
    })
  }

  createPhoneNumber(): void{

  }

  submit(): void {
    const contractor = this.contractorForm.value;
    console.log(contractor)
  }

}
