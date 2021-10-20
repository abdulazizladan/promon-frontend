import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyorsRoutingModule } from './surveyors-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromSurveyors from './reducers';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SurveyorsRoutingModule,
    StoreModule.forFeature(fromSurveyors.surveyorsFeatureKey, fromSurveyors.reducers, { metaReducers: fromSurveyors.metaReducers })
  ]
})
export class SurveyorsModule { }
