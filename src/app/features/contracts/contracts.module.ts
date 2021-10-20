import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { AddContractComponent } from './components/add-contract/add-contract.component';
import { ContractsListComponent } from './components/contracts-list/contracts-list.component';
import { ContractSummaryComponent } from './components/contract-summary/contract-summary.component';


@NgModule({
  declarations: [
    AddContractComponent,
    ContractsListComponent,
    ContractSummaryComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule
  ]
})
export class ContractsModule { }
