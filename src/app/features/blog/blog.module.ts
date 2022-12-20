import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListPageComponent } from './blog-list-page/blog-list-page.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogDetailPageComponent } from './blog-detail-page/blog-detail-page.component';


@NgModule({
  declarations: [
    BlogListPageComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogDetailPageComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
