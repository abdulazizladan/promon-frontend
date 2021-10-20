import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectSummaryComponent } from './components/project-summary/project-summary.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { StoreModule } from '@ngrx/store';
import * as fromProjects from './reducers';


@NgModule({
  declarations: [
    ProjectsListComponent,
    ProjectSummaryComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    StoreModule.forFeature(fromProjects.projectsFeatureKey, fromProjects.reducers, { metaReducers: fromProjects.metaReducers })
  ]
})
export class ProjectsModule { }
