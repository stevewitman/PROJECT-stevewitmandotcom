import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentoringRoutingModule } from './mentoring-routing.module';
import { MentoringPageComponent } from './mentoring-page/mentoring-page.component';


@NgModule({
  declarations: [
    MentoringPageComponent
  ],
  imports: [
    CommonModule,
    MentoringRoutingModule
  ]
})
export class MentoringModule { }
