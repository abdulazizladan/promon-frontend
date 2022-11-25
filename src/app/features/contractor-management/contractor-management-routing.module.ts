import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractorDetailsComponent } from './components/contractor-details/contractor-details.component';
import { ContractorsListComponent } from './components/contractors-list/contractors-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContractorsListComponent
  },
  {
    path: ':id',
    component: ContractorDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorManagementRoutingModule { }
