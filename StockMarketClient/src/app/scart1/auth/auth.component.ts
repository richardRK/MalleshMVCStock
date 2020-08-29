import { NavbarService } from './../../shared/navbar.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private auth: LoginService,private nvSrvc:NavbarService) {}


  ngOnInit(): void {
    this.nvSrvc.hide();
  }

  login() {
    
    this.auth.login();
  }
}
