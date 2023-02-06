import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SupportRoutingModule } from './support-routing.module';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ReplyComponent } from './components/reply/reply.component';
import { supportReducer, supportStateKey } from './store/support.reducer';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    TicketsListComponent,
    TicketComponent,
    ReplyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(supportStateKey, supportReducer),
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    SupportRoutingModule
  ]
})
export class SupportModule { }
