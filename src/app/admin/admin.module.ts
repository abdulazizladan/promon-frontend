import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './admin.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature(fromAdmin.adminFeatureKey, fromAdmin.reducers, { metaReducers: fromAdmin.metaReducers }),
    EffectsModule.forFeature([AdminEffects])
  ]
})
export class AdminModule { }
