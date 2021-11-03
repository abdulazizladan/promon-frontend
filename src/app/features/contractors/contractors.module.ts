import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';

import { ContractorsRoutingModule } from './contractors-routing.module';
import { ContractorsListComponent } from './components/contractors-list/contractors-list.component';
import { AddContractorComponent } from './components/add-contractor/add-contractor.component';
import { ContractorSummaryComponent } from './components/contractor-summary/contractor-summary.component';
import { StoreModule } from '@ngrx/store';
import * as fromContractors from './reducers';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
  declarations: [
    ContractorsListComponent,
    AddContractorComponent,
    ContractorSummaryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatDividerModule,
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    ContractorsRoutingModule,
    StoreModule.forFeature
    (fromContractors.contractorsFeatureKey,
      fromContractors.reducers,
    )
  ]
})
export class ContractorsModule { }
