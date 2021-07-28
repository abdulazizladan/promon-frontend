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


@NgModule({
  declarations: [
    DashboardComponent,
    UsersListComponent,
    ProjectsListComponent,
    ContractorsListComponent,
    AddProjectComponent,
    AddContractorComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature(fromAdmin.adminFeatureKey, fromAdmin.reducers, { metaReducers: fromAdmin.metaReducers }),
    EffectsModule.forFeature([AdminEffects])
  ]
})
export class AdminModule { }
