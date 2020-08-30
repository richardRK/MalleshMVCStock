import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-loginstart',
  templateUrl: './loginstart.component.html',
  styleUrls: ['./loginstart.component.scss'],
})
export class LoginstartComponent implements OnInit {
  constructor(private router: Router, public nav: NavbarService) {}

  ngOnInit(): void {
    this.nav.hide();
  }

  login() {
    this.router.navigate(['/test55']);
  }
}
