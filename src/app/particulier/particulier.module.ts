import { MatModule } from '../mat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticulierComponent } from './particulier.component';
import { ParticulierRoutingModule } from './particulier-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    ParticulierComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    ParticulierRoutingModule,
    MatModule,
    SharedModule,
  ]
})
export class ParticulierModule { }
