import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsolePageComponent } from './admin-features/console-page/console-page.component';
import { AdminPageComponent } from './admin-features/admin-page/admin-page.component'
import { AdminBlogListPageComponent } from './admin-features/admin-blog-list-page/admin-blog-list-page.component';
import { AdminBlogPageComponent } from './admin-features/admin-blog-page/admin-blog-page.component';
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
      {
        path: 'blog',
        component: AdminBlogListPageComponent,
      },
      {
        path: 'blog/:id',
        component: AdminBlogPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
