import { AuthComponent } from './../scart1/auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent

    // children: [
    //   {
    //     path: 'dashboard',
    //     component: Dashboard1Component,
    //   },
    // ],
  },

  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Scart1RoutingModule {}
