import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  email: string = '';
  password: string = '';
  constructor(private auth: AuthService) {}

  register() {
    if (this.email == '') {
      alert('Please enter email');
      return;
    }
    if (this.password == '') {
      alert('Please enter password');
      return;
    }
    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
