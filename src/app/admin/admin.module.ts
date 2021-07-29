import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

//FlexLayout module
import { FlexLayoutModule } from '@angular/flex-layout';

//Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersListComponent,
    ProjectsListComponent,
    ContractorsListComponent,
    AddProjectComponent,
    AddContractorComponent,
    AddUserComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature(fromAdmin.adminFeatureKey, fromAdmin.reducers, { metaReducers: fromAdmin.metaReducers }),
    EffectsModule.forFeature([AdminEffects]),
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AdminModule { }
