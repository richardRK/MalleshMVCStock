import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/navbar.service';

@Component({
  selector: 'dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css'],
})
export class Dashboard1Component implements OnInit {
  constructor(public nav: NavbarService) {}

  ngOnInit(): void {
    this.nav.show();
  }
}
