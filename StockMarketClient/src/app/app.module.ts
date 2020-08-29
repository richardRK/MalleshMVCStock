import { NavbarService } from 'src/app/shared/navbar.service';
import { CategoryService } from './shared/category.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from './shared/login.service';
import { Dashboard1Component } from './scart1/dashboard1/dashboard1.component';
@NgModule({
  declarations: [AppComponent,Dashboard1Component],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [LoginService,CategoryService,NavbarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
