import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MessageComponent } from './components/message/message.component';
import { LoaderService } from './services/loader.service';
import { MessageService } from './services/message.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    NotFoundComponent,
    LoaderComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [
    NotFoundComponent,
    LoaderComponent,
    MessageComponent
  ],
  providers: [
    LoaderService,
    MessageService
  ]
})
export class SharedModule { }
