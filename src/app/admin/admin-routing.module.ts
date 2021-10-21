import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { ContractorComponent } from './components/contractor/contractor.component';
import { ContractorsListComponent } from './components/contractors-list/contractors-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { UserComponent } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MailComponent } from './components/mail/mail.component';

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
        loadChildren: () => import('../features/projects/projects.module').then(mod => mod.ProjectsModule)
      },
      {
        path: 'contractors',
        component: ContractorsListComponent
      },
      {
        path: 'contractor/:id',
        component: ContractorComponent
      },
      {
        path: 'users',
        component: UsersListComponent
      },
      {
        path: 'mail',
        component: MailComponent
      },
      {
        path: 'user/:id',
        component: UserComponent
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
