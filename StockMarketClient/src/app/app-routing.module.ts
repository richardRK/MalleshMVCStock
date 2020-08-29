import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard1Component } from './scart1/dashboard1/dashboard1.component';
import { ProductComponent } from './scart1/Product/product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/scart',
    pathMatch: 'full',
  },
  {
    path: 'scart',
    loadChildren: () =>
      import(`../app/scart1/scart1.module`).then((m) => m.Scart1Module),
    // canActivate: [Dashboard1Component]
  },

  {
    path:'dashboard',
    component: Dashboard1Component
  },

  {
    path:'product',
    component: ProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
