import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceProRoutingModule } from './service-pro-routing.module';
import { ServiceProComponent } from './service-pro.component';
import { BaseComponent } from './base/base.component';
import { MatModule } from '../mat.module';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [
    ServiceProComponent,
    BaseComponent,
  ],
  imports: [
    CommonModule,
    ServiceProRoutingModule,
    MatModule,
    SharedModule,
  ]
})
export class ServiceProModule { }
