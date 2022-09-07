import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './admin-features/admin-page/admin-page.component'
import { ShortenerPageComponent } from './admin-features/shortener/shortener-page/shortener-page.component'

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent
  },
  {
    path: 'shortener',
    component: ShortenerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
