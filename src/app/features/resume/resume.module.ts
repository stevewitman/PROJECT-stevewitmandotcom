import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { ResumePageComponent } from './resume-page/resume-page.component';

@NgModule({
  declarations: [ResumeComponent, ResumePageComponent],
  imports: [CommonModule, ResumeRoutingModule, MatButtonModule],
  exports: [ResumeComponent],
})
export class ResumeModule {}
