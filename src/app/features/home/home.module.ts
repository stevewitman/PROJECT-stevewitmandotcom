import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexComponent } from './index/index.component';
import { ResumeModule } from '../resume/resume.module';

@NgModule({
  declarations: [HomePageComponent, IndexComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ResumeModule,
  ],
})
export class HomeModule {}
