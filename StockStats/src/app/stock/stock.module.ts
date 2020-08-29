import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockStatsComponent } from './stock-stats/stock-stats.component';


@NgModule({
  declarations: [StockStatsComponent],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule { }
