import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NewNotificationComponent } from './scomponents/new-notification/new-notification.component';


@NgModule({
  declarations: [
    NewNotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
