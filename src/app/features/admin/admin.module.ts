import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-features/admin-page/admin-page.component';
import { AdminNavComponent } from './admin-features/admin-nav/admin-nav.component';
import { ConsolePageComponent } from './admin-features/console-page/console-page.component';
import { LinkAddComponent } from './admin-features/link-add/link-add.component';
import { LinksPageComponent } from './admin-features/links-page/links-page.component';
import { LinksListComponent } from './admin-features/links-list/links-list.component';

@NgModule({
  declarations: [AdminPageComponent, AdminNavComponent, ConsolePageComponent, LinkAddComponent, LinksPageComponent, LinksListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
  ],
})
export class AdminModule {}
