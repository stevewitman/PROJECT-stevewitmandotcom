import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListPageComponent } from './blog-list-page/blog-list-page.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogDetailPageComponent } from './blog-detail-page/blog-detail-page.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogEditPageComponent } from './blog-edit-page/blog-edit-page.component';

@NgModule({
  declarations: [
    BlogListPageComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogDetailPageComponent,
    BlogEditComponent,
    BlogEditPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BlogRoutingModule,
    MatInputModule,
  ],
})
export class BlogModule {}
