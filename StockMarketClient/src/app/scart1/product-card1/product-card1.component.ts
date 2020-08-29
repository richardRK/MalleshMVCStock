import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingCart } from 'src/app/models/shopping-cart';

@Component({
  selector: 'product-card1',
  templateUrl: './product-card1.component.html',
  styleUrls: ['./product-card1.component.css'],
})
export class ProductCard1Component implements OnInit {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor() {
    var res = this.product;
    var r1 = this.shoppingCart;
  }
  ngOnInit(): void {}


  ngOnChanges(changes: SimpleChanges) {
    // Input change handling logic goes here   

    if (changes) {
      var res = changes
    }  
  }

  
  addToCart() {
    // this.cartService.addToCart(this.product);
  }
}
