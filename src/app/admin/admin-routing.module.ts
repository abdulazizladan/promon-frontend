import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { ContractorsListComponent } from './components/contractors-list/contractors-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'projects',
        component: ProjectsListComponent
      },
      {
        path: 'contractors',
        component: ContractorsListComponent
      },
      {
        path: 'users',
        component: UsersListComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
