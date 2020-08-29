import { NavbarService } from './../services/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.scss'],
})
export class Navbar1Component implements OnInit {
  constructor(public nav: NavbarService) {}

  ngOnInit(): void {}
}
