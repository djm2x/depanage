import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    data: { preload: true, delay: false }
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    data: { preload: true, delay: false }
  },
  {
    path: 'particulier',
    loadChildren: './particulier/particulier.module#ParticulierModule',
    data: { preload: true, delay: false }
  },
  {
    path: 'services-professionnels',
    loadChildren: './service-pro/service-pro.module#ServiceProModule',
    data: { preload: true, delay: false }
  },
  {
    path: 'a-propos',
    loadChildren: './about/about.module#AboutModule',
    data: { preload: true, delay: false }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
