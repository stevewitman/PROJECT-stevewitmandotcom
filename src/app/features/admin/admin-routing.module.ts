import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './admin-features/admin-page/admin-page.component'
import { ConsolePageComponent } from './admin-features/console-page/console-page.component';
import { LinksPageComponent } from './admin-features/links-page/links-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: 'console',
        component: ConsolePageComponent,
      },
      {
        path: 'links',
        component: LinksPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
