import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgChartsModule } from 'ng2-charts';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ContractorsListComponent } from './components/contractors-list/contractors-list.component';
import { ContractorDetailsComponent } from './components/contractor-details/contractor-details.component';
import { AddContractorComponent } from './components/add-contractor/add-contractor.component';
import { AdminFeatureKey, AdminReducer } from './store/reducers/admin.reducer';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    ProjectsListComponent,
    ProjectDetailsComponent,
    AddProjectComponent,
    ContractorsListComponent,
    ContractorDetailsComponent,
    AddContractorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature( AdminFeatureKey, AdminReducer ),
    FlexLayoutModule,
    NgChartsModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatBadgeModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
