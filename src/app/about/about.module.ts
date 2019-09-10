import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { BaseComponent } from './base/base.component';
import { MatModule } from '../mat.module';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [
    AboutComponent,
    BaseComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatModule,
    SharedModule,
  ]
})
export class AboutModule { }
