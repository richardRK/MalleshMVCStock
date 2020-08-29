import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { Navbar1Component } from './navbar1/navbar1.component';


@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
  ],
  imports: [
    BrowserModule
    ,AgGridModule.withComponents([])
    ,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
