import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { AddContractComponent } from './components/add-contract/add-contract.component';
import { ContractsListComponent } from './components/contracts-list/contracts-list.component';
import { ContractSummaryComponent } from './components/contract-summary/contract-summary.component';
import { StoreModule } from '@ngrx/store';
import * as fromContracts from './reducers';


@NgModule({
  declarations: [
    AddContractComponent,
    ContractsListComponent,
    ContractSummaryComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    StoreModule.forFeature(fromContracts.contractsFeatureKey, fromContracts.reducers, { metaReducers: fromContracts.metaReducers })
  ]
})
export class ContractsModule { }
