import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ShortenerPageComponent } from './admin-features/shortener/shortener-page/shortener-page.component';
import { AdminPageComponent } from './admin-features/admin-page/admin-page.component';

@NgModule({
  declarations: [ShortenerPageComponent, AdminPageComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
