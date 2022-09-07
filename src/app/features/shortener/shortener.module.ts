import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortenerRoutingModule } from './shortener-routing.module';
import { ShortComponent } from './short/short.component';


@NgModule({
  declarations: [
    ShortComponent
  ],
  imports: [
    CommonModule,
    ShortenerRoutingModule
  ]
})
export class ShortenerModule { }
