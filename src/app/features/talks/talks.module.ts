import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalksRoutingModule } from './talks-routing.module';
import { TalksPageComponent } from './talks-page/talks-page.component';

@NgModule({
  declarations: [
    TalksPageComponent
  ],
  imports: [
    CommonModule,
    TalksRoutingModule
  ]
})
export class TalksModule { }
