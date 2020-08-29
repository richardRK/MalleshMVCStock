import { NavbarService } from './services/navbar.service';
import { TestService } from './services/test.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { Navbar1Component } from './navbar1/navbar1.component';
import { StockStatsComponent } from './stock/stock-stats/stock-stats.component';


@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
    StockStatsComponent
  ],
  imports: [
    BrowserModule
    ,AgGridModule.withComponents([StockStatsComponent])
    ,AppRoutingModule
  ],
  providers: [TestService,NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
