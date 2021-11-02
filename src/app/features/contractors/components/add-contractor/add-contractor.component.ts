import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ContractorsService } from '../../services/contractors.service';

@Component({
  selector: 'app-add-contractor',
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.scss']
})
export class AddContractorComponent implements OnInit {

  public contractorForm: FormGroup = new FormGroup({});
  phoneNumbers: any;

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
      password: ['', Validators.required],
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
    this.phoneNumbers = this.contractorForm.get('phoneNumbers') as FormArray;
    this.phoneNumbers.push(this.fb.control({number: ['', [Validators.required]]}))
  }

  submit(): void {
    const contractor = this.contractorForm.value;
    console.log(contractor)
  }

}
