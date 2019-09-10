import { ParticulierComponent } from './particulier.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', component: ParticulierComponent,
    children: [
      { path: '', redirectTo: 'depannage-a-domicile/4', pathMatch: 'full' },
      { path: 'depannage-a-domicile/:id', component: BaseComponent, data: { state: 'depannage' } },
      { path: 'reparations-et-maintenance-en-atelier/:id', component: BaseComponent, data: { state: 'formation' } },
      { path: 'formation-informatique/:id', component: BaseComponent, data: { state: 'reparation' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticulierRoutingModule { }
