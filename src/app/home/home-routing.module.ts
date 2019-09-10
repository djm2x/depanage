import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: HomeComponent,
    // children: [
    //   { path: '', redirectTo: 'reparation', pathMatch: 'full' },
    //   { path: 'depannage-a-domicile/:id', component: BaseComponent, data: { state: 'depannage' } },
    //   { path: 'reparations-et-maintenance-en-atelier/:id', component: BaseComponent, data: { state: 'formation' } },
    //   { path: 'formation-informatique/:id', component: BaseComponent, data: { state: 'reparation' } },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
