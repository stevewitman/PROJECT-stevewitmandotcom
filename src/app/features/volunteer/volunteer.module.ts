import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerRoutingModule } from './volunteer-routing.module';
import { VolunteerPageComponent } from './volunteer-page/volunteer-page.component';


@NgModule({
  declarations: [
    VolunteerPageComponent
  ],
  imports: [
    CommonModule,
    VolunteerRoutingModule
  ]
})
export class VolunteerModule { }
