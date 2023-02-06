import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ContractorManagementRoutingModule } from './contractor-management-routing.module';
import { ContractorsListComponent } from './components/contractors-list/contractors-list.component';
import { ContractorDetailsComponent } from './components/contractor-details/contractor-details.component';
import { AddContractorComponent } from './components/add-contractor/add-contractor.component';
import { StoreModule } from '@ngrx/store';
import { ContractorsReducer, featureKey } from './store/contractors.reducer';


@NgModule({
  declarations: [
    ContractorsListComponent,
    ContractorDetailsComponent,
    AddContractorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(featureKey, ContractorsReducer),
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatStepperModule,
    FlexLayoutModule,
    ContractorManagementRoutingModule
  ]
})
export class ContractorManagementModule { }
