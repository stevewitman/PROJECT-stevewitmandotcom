import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CoreModule } from 'src/app/core/core.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-features/admin-page/admin-page.component';
import { AdminNavComponent } from './admin-features/admin-nav/admin-nav.component';
import { ConsolePageComponent } from './admin-features/console-page/console-page.component';
import { LinkAddComponent } from './admin-features/link-add/link-add.component';
import { LinksPageComponent } from './admin-features/links-page/links-page.component';
import { LinksListComponent } from './admin-features/links-list/links-list.component';
import { AdminBlogPageComponent } from './admin-features/admin-blog-page/admin-blog-page.component';
import { AdminBlogEditComponent } from './admin-features/admin-blog-edit/admin-blog-edit.component';
import { BlogModule } from '../blog/blog.module';
import { AdminBlogListPageComponent } from './admin-features/admin-blog-list-page/admin-blog-list-page.component';
import { AdminBlogListComponent } from './admin-features/admin-blog-list/admin-blog-list.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    AdminNavComponent,
    ConsolePageComponent,
    LinkAddComponent,
    LinksPageComponent,
    LinksListComponent,
    AdminBlogPageComponent,
    AdminBlogEditComponent,
    AdminBlogListPageComponent,
    AdminBlogListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    AdminRoutingModule,
    BlogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ],
})
export class AdminModule {}
