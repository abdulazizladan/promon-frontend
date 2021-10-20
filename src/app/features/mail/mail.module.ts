import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromMail from './reducers';
import { InboxComponent } from './components/inbox/inbox.component';


@NgModule({
  declarations: [
    InboxComponent
  ],
  imports: [
    CommonModule,
    MailRoutingModule,
    StoreModule.forFeature(fromMail.mailFeatureKey, fromMail.reducers, { metaReducers: fromMail.metaReducers })
  ]
})
export class MailModule { }
