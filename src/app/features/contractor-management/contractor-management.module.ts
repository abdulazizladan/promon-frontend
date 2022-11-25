import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ContractorManagementRoutingModule } from './contractor-management-routing.module';
import { ContractorsListComponent } from './components/contractors-list/contractors-list.component';
import { ContractorDetailsComponent } from './components/contractor-details/contractor-details.component';
import { AddContractorComponent } from './components/add-contractor/add-contractor.component';


@NgModule({
  declarations: [
    ContractorsListComponent,
    ContractorDetailsComponent,
    AddContractorComponent
  ],
  imports: [
    CommonModule,
    ContractorManagementRoutingModule
  ]
})
export class ContractorManagementModule { }
