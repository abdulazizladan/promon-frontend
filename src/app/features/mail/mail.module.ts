import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromMail from './reducers';
import { InboxComponent } from './components/inbox/inbox.component';
import { SentComponent } from './components/sent/sent.component';
import { DraftsComponent } from './components/drafts/drafts.component';
import { ComposeComponent } from './components/compose/compose.component';


@NgModule({
  declarations: [
    InboxComponent,
    SentComponent,
    DraftsComponent,
    ComposeComponent
  ],
  imports: [
    CommonModule,
    MailRoutingModule,
    StoreModule.forFeature(fromMail.mailFeatureKey, fromMail.reducers, { metaReducers: fromMail.metaReducers })
  ]
})
export class MailModule { }
