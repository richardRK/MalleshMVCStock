import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  getCart(): Observable<any> {
    return of([
      {
        items: {
          '-KrrIkDT19XhPgWo0T0A': {
            imageUrl:
              'https://static.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg',
            price: 6,
            quantity: 5,
            title: 'Freshly Baked Bread ',
          },
        },
      },
    ]);
  }

  constructor() {}
}
