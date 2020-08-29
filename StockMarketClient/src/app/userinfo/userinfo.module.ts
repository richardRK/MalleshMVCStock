import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserinfoRoutingModule } from './userinfo-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UserinfoRoutingModule,
    SharedModule
  ]
})
export class UserinfoModule { }
