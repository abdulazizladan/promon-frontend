import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ContractorService }from '../../services/contractor.service'

@Component({
  selector: 'app-add-contractor',
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.scss']
})
export class AddContractorComponent implements OnInit {

  public contractorForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private contractorService: ContractorService
  ) { }

  ngOnInit(): void {
    this.contractorForm = this.fb.group({
      name: ['', [Validators.required]],
      website: ['']
    })
  }

}
