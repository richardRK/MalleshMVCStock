import { Test55Component } from './test55/test55.component';
import { StockStatsComponent } from './stock/stock-stats/stock-stats.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Navbar1Component } from './navbar1/navbar1.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import(`../app/login/login-routing.module`).then(
        (m) => m.LoginRoutingModule
      ),
    // canActivate: [Dashboard1Component]
  },
  {
    path: '',
    redirectTo: '/stock',
    pathMatch: 'full',
  },
  {
    path: 'stock',
    loadChildren: () =>
      import(`../app/stock/stock-routing.module`).then(
        (m) => m.StockRoutingModule
      ),
    // canActivate: [Dashboard1Component]
  },

  {
    path:'navbar',
    component: Navbar1Component
  },


  {
    path:'test55',
    component: Test55Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
