import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, FormArray, Validators } from '@angular/forms';
import { ContractsService } from '../../services/contracts.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.scss']
})
export class AddContractComponent implements OnInit {

  contractForm: FormGroup = new FormGroup({});

  /**
   *
   * @param contractService
   * @param fb
   */
  constructor(
    private contractService: ContractsService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  /**
   * Initialize contract form
   */
  private initializeForm(): void {
    this.contractForm = this.fb.group({
      projectId: ['', [Validators.required]],
      contractorId: ['', [Validators.required]],
      startDate: [null, [Validators.required]],
      deadline: [null, [Validators.required]]
    })
  }

  /**
   *
   */
  submit() {
    const contract = this.contractForm.value;
    this.contractService.create(contract)
  }

}
