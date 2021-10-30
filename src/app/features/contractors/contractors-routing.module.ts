import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractorSummaryComponent } from './components/contractor-summary/contractor-summary.component';
import { ContractorsListComponent } from './components/contractors-list/contractors-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContractorsListComponent
  },
  {
    path: ':id',
    component: ContractorSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorsRoutingModule { }
