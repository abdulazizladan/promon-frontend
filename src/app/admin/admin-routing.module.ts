import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'projects',
        loadChildren: () => import('../features/project-management/project-management.module').then(module => module.ProjectManagementModule)
      },
      {
        path: 'contractors',
        loadChildren: () => import('../features/contractor-management/contractor-management.module').then(module => module.ContractorManagementModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../features/user-management/users.module').then(module => module.UsersModule)
      },
      {
        path: 'support',
        loadChildren: () => import('../features/support/support.module').then(module => module.SupportModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
