import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractorsState } from '../../store/contractors.reducer';
import { Store } from '@ngrx/store';
import { addContractor } from '../../store/contractors.actions';

@Component({
  selector: 'app-add-contractor',
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.scss']
})
export class AddContractorComponent implements OnInit {

  newContractorForm: FormGroup = new FormGroup({});

  constructor(
    private store: Store<{ state: ContractorsState }>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.newContractorForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      contact: this.fb.group({
        website: [''],
        email: [''],
        address: this.fb.group({
          streetAddress: [''],
          lga: [''],
          state: [''],
          country: ['']
        })
      })
    })
  }

  addContractor(): void {
    const newContractor = this.newContractorForm.value;
    //console.log(formData);
    this.store.dispatch(addContractor({ contractor: newContractor }));
  }

}
