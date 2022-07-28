import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalksPageComponent } from './talks-page/talks-page.component';

const routes: Routes = [
  {
    path: '',
    component: TalksPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalksRoutingModule { }
