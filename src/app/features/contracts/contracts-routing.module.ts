import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractSummaryComponent } from './components/contract-summary/contract-summary.component';
import { ContractsListComponent } from './components/contracts-list/contracts-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContractsListComponent
  },
  {
    path: ':id',
    component: ContractSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
