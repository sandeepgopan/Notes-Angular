import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogin = false;
  isForgotPassword = false;
  isRegister = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (this.router.url === '/login') {
      this.isLogin = true;
      this.isRegister = false;
      this.isForgotPassword = false;
    } else if (this.router.url === '/register') {
      this.isLogin = false;
      this.isRegister = true;
      this.isForgotPassword = false;
    } else if (this.router.url === '/forgot-password') {
      this.isLogin = false;
      this.isRegister = false;
      this.isForgotPassword = true;
    }
  }
}
