import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectSummaryComponent } from './components/project-summary/project-summary.component';
import { AddProjectComponent } from './components/add-project/add-project.component';


@NgModule({
  declarations: [
    ProjectsListComponent,
    ProjectSummaryComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
