import { ProductCard1Component } from './../scart1/product-card1/product-card1.component';
import { Product } from './../models/product';
import { Dashboard1Component } from './../scart1/dashboard1/dashboard1.component';
import { ProductComponent } from './../scart1/Product/product.component';
import { PlistComponent } from './../scart1/plist/plist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Scart1RoutingModule } from './scart1-routing.module';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AuthComponent,
    PlistComponent,
    ProductComponent,
    ProductCard1Component,
  ],
  imports: [CommonModule, Scart1RoutingModule],
})
export class Scart1Module {}
