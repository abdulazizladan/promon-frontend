import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AddContractComponent,
    ContractsListComponent,
    ContractSummaryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatTableModule,
    ContractsRoutingModule,
    StoreModule.forFeature(
      fromContracts.contractsFeatureKey,
      fromContracts.contractReducers
    )
  ]
})
export class ContractsModule { }
