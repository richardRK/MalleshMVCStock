import { ShoppingCartService } from './../../shared/shopping-cart.service';
import { ProductService } from './../../shared/product.service';
import { ShoppingCart } from './../../models/shopping-cart';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { NavbarService } from 'src/app/shared/navbar.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private nvSrvc: NavbarService
  ) {}

  async ngOnInit() {
    this.nvSrvc.show();
    await this.shoppingCartService.getCart().subscribe((ref) => {
      this.cart = ref;
    });
    this.populateProducts();
  }

  private populateProducts() {
    this.productService
      .getAll()
      .pipe(
        switchMap((products) => {
          this.products = products;
          return this.route.queryParamMap;
        })
      )
      .subscribe((params) => {
        this.category = params.get('category');
        this.applyFilter();
      });
  }

  private applyFilter() {
    this.filteredProducts = this.category
      ? this.products.filter((p) => p.category === this.category)
      : this.products;
  }
}
