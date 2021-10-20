import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractorsRoutingModule } from './contractors-routing.module';
import { ContractorsListComponent } from './components/contractors-list/contractors-list.component';
import { AddContractorComponent } from './components/add-contractor/add-contractor.component';
import { ContractorSummaryComponent } from './components/contractor-summary/contractor-summary.component';


@NgModule({
  declarations: [
    ContractorsListComponent,
    AddContractorComponent,
    ContractorSummaryComponent
  ],
  imports: [
    CommonModule,
    ContractorsRoutingModule
  ]
})
export class ContractorsModule { }
