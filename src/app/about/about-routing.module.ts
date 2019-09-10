import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { AboutComponent } from './about.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', component: AboutComponent,
    children: [
      { path: '', redirectTo: 'nous/8', pathMatch: 'full' },
      { path: 'nous/:id', component: BaseComponent, data: { state: 'depannage' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
