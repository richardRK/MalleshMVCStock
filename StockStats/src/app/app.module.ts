import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NavbarService } from './services/navbar.service';
import { TestService } from './services/test.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { Navbar1Component } from './navbar1/navbar1.component';
import { StockStatsComponent } from './stock/stock-stats/stock-stats.component';
import { FormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from './material/material.module';
import { Test55Component } from './test55/test55.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, Navbar1Component, StockStatsComponent, Test55Component],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([Test55Component]),
    AppRoutingModule,
    FormsModule,
    CdkTableModule,
    MaterialModule,
    HttpClientModule,
    Ng2SmartTableModule
  ],


  providers: [TestService, NavbarService,HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
