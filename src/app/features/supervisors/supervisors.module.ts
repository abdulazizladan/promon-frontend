import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupervisorsRoutingModule } from './supervisors-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromSupervisors from './reducers';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SupervisorsRoutingModule,
    StoreModule.forFeature(
      fromSupervisors.surveyorsFeatureKey,
      fromSupervisors.reducers,
      { metaReducers: fromSupervisors.metaReducers })
  ]
})
export class SupervisorsModule { }
