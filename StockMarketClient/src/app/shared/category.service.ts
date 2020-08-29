import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  category: any = [];

  constructor() {}

  getAll(): any {
    return of([
      {
        name: 'bread',
      },
      {
        name: 'dairy',
      },
      {
        name: 'fruits',
      },
      {
        name: 'seasonings',
      },
      {
        name: 'vegetables',
      },
    ]);
  }
}
