import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ShellComponent } from './components/shell/shell.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { AuthStatusComponent } from './components/auth-status/auth-status.component';

@NgModule({
  declarations: [
    ShellComponent,
    HeaderNavComponent,
    AuthStatusComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  exports: [ShellComponent],
})
export class CoreModule {}
