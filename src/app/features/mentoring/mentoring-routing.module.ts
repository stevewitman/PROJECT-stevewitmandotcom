import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentoringPageComponent } from './mentoring-page/mentoring-page.component';

const routes: Routes = [
  {
    path: '',
    component: MentoringPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentoringRoutingModule { }
