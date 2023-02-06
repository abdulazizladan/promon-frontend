import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader.service';

import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  providers: [
    LoaderService
  ],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class SharedModule { }
