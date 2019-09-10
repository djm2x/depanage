import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { ServiceProComponent } from './service-pro.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', component: ServiceProComponent,
    children: [
      { path: '', redirectTo: 'depannage/1', pathMatch: 'full' },
      { path: 'depannage/:id', component: BaseComponent, data: { state: 'depannage' } },
      { path: 'formation/:id', component: BaseComponent, data: { state: 'formation' } },
      { path: 'reparation/:id', component: BaseComponent, data: { state: 'reparation' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProRoutingModule { }
