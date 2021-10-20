import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectSummaryComponent } from './components/project-summary/project-summary.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { StoreModule } from '@ngrx/store';
import * as fromProjects from './reducers';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProjectsListComponent,
    ProjectSummaryComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    SharedModule,
    ProjectsRoutingModule,
    StoreModule.forFeature(fromProjects.projectsFeatureKey, fromProjects.reducers, { metaReducers: fromProjects.metaReducers })
  ]
})
export class ProjectsModule { }
