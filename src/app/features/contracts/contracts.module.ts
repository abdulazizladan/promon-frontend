import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ContractsRoutingModule } from './contracts-routing.module';
import { AddContractComponent } from './components/add-contract/add-contract.component';
import { ContractsListComponent } from './components/contracts-list/contracts-list.component';
import { ContractSummaryComponent } from './components/contract-summary/contract-summary.component';
import { StoreModule } from '@ngrx/store';
import * as fromContracts from './reducers';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AddContractComponent,
    ContractsListComponent,
    ContractSummaryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    ContractsRoutingModule,
    StoreModule.forFeature(fromContracts.contractsFeatureKey, fromContracts.reducers, { metaReducers: fromContracts.metaReducers })
  ]
})
export class ContractsModule { }
