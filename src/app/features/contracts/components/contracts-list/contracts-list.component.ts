import { Component, OnInit } from '@angular/core';
import { loadContracts } from '../../actions/contracts.actions';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddContractComponent } from '../add-contract/add-contract.component';
import { Contract } from '../../models/contract.model';
import { ContractsService } from '../../services/contracts.service';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ContractState } from '../../reducers';
import { noop } from 'rxjs';

@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.component.html',
  styleUrls: ['./contracts-list.component.scss']
})
export class ContractsListComponent implements OnInit {

  contracts: Contract[] = [];
  constructor(
    private dialog: MatDialog,
    private store: Store<{contractState: ContractState}>,
    private contractsService: ContractsService
  ) { }

  ngOnInit(): void {
    this.getContracts()
  }

  private getContracts(): void {
    this.contractsService.getAll()
    .pipe(
      tap(
        contracts => {
        //this.contracts = contracts
        this.store.dispatch(loadContracts())
      })
    )
    .subscribe(
      () => noop
    )
  }

  openDialog(): void{
    this.dialog.open(AddContractComponent)
  }

}
