import { Stock } from './../common/stock';
import { Injectable } from '@angular/core';
import { IGetRowsParams } from 'ag-grid-community';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  // formData: PaymentDetail= new PaymentDetail();
  readonly rootURL = 'https://localhost:44328/api/Stock1';
  list: Stock[];

  constructor(private http: HttpClient) {}

  users = [
    {
      id: 1,
      first_name: 'Lorrayne',
      last_name: 'Klessmann',
      email: 'lklessmann0@opera.com',
      gender: 'Female',
      company: 'Pfannerstill Group',
    },
    {
      id: 2,
      first_name: 'Armando',
      last_name: 'Hawkswood',
      email: 'ahawkswood1@mayoclinic.com',
      gender: 'Male',
      company: 'Schowalter-Emmerich',
    },
    {
      id: 3,
      first_name: 'Kaleb',
      last_name: 'Hassett',
      email: 'khassett2@imgur.com',
      gender: 'Male',
      company: 'Rau, Monahan and Witting',
    },
    {
      id: 4,
      first_name: 'Berk',
      last_name: 'Roath',
      email: 'broath3@geocities.com',
      gender: 'Male',
      company: 'Hane-Moore',
    },
  ];

  getUsers(): Observable<any> {
    return of(this.users);
  }

  // getBlogPost(postId: number): Observable<BlogPost> {
  //   return this.http
  //     .get<BlogPost>(this.myAppUrl + this.myApiUrl + postId)
  //     .pipe(retry(1), catchError(this.errorHandler));
  // }

  getAllStocks(): Observable<Stock> {
    return this.http.get<Stock>(`${this.rootURL}/GetAll/`);
  }
}
