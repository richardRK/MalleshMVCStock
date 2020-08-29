import { Injectable } from '@angular/core';
import { IGetRowsParams } from 'ag-grid-community';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
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
    {
      id: 5,
      first_name: 'Taite',
      last_name: 'Palley',
      email: 'tpalley4@pagesperso-orange.fr',
      gender: 'Male',
      company: 'Sporer, Zieme and Klein',
    },
    {
      id: 6,
      first_name: 'Richie',
      last_name: 'Fenty',
      email: 'rfenty5@miitbeian.gov.cn',
      gender: 'Male',
      company: 'Stanton LLC',
    },
    {
      id: 7,
      first_name: 'Elnar',
      last_name: 'Richichi',
      email: 'erichichi6@ameblo.jp',
      gender: 'Male',
      company: 'Sporer-Gutmann',
    },
    {
      id: 8,
      first_name: 'Brunhilde',
      last_name: 'Ceschelli',
      email: 'bceschelli7@deviantart.com',
      gender: 'Female',
      company: 'Lindgren Group',
    },
    {
      id: 9,
      first_name: 'Jeth',
      last_name: 'Grimble',
      email: 'jgrimble8@ask.com',
      gender: 'Male',
      company: "O'Reilly, Kozey and Stracke",
    },
  ];

  getUsers(params: IGetRowsParams): Observable<any> {
    return of(this.users);
  }

  constructor() {}
}
