import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';


@NgModule({
  declarations: [
    AddProjectComponent,
    ProjectsListComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule
  ]
})
export class ProjectManagementModule { }
