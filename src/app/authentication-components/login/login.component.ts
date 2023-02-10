import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/reusable-components/modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  isLogin = false;
  isForgotPassword = false;
  isRegister = false;
  constructor(private router: Router, private modalService: MdbModalService) {}
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
  openModal() {
    this.modalRef = this.modalService.open(ModalComponent);
  }
}
