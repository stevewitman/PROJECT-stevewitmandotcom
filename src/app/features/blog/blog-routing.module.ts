import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogListPageComponent } from './blog-list-page/blog-list-page.component';
import { BlogDetailPageComponent } from './blog-detail-page/blog-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: BlogListPageComponent,
  },
  {
    path: ':id',
    component: BlogDetailPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
