import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractorsListComponent } from './components/contractors-list/contractors-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
