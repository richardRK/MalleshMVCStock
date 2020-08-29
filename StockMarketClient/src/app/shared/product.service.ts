import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getAll(): Observable<any> {
    return of([
      {
        category: 'fruits',
        imageUrl:
          'http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg',
        price: 2.5,
        title: 'Spinach',
      },
      {
        category: 'bread',
        imageUrl:
          'https://static.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg',
        price: 6,
        title: 'Freshly Baked Bread ',
      },
    ]);
  }

  constructor() {}
}
