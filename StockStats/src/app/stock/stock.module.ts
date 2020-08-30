import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockStatsComponent } from './stock-stats/stock-stats.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [StockStatsComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    MaterialModule
  ],

  // exports: [MatTableModule,MaterialModule],
})
export class StockModule { }
