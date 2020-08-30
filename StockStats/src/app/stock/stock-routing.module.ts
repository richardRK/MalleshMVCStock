import { StockStatsComponent } from './stock-stats/stock-stats.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: StockStatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {}
