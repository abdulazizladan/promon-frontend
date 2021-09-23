import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './admin.effects';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ContractorsListComponent } from './components/contractors-list/contractors-list.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddContractorComponent } from './components/add-contractor/add-contractor.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { ChartsModule } from 'ng2-charts';
//FlexLayout module
import { FlexLayoutModule } from '@angular/flex-layout';

//Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';

import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { StateMapComponent } from './components/state-map/state-map.component';
import { CountryMapComponent } from './components/country-map/country-map.component';
import { LgaMapComponent } from './components/lga-map/lga-map.component';
import { ContractorComponent } from './components/contractor/contractor.component';
import { UserComponent } from './components/user/user.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersListComponent,
    ProjectsListComponent,
    ContractorsListComponent,
    AddProjectComponent,
    AddContractorComponent,
    AddUserComponent,
    AdminLayoutComponent,
    ProjectDetailsComponent,
    StateMapComponent,
    CountryMapComponent,
    LgaMapComponent,
    ContractorComponent,
    UserComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    StoreModule.forFeature(
      'admin',
      fromAdmin.adminReducer
    ),
    EffectsModule.forFeature([AdminEffects]),
    ChartsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatListModule
  ]
})
export class AdminModule { }
