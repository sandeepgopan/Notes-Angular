import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-components/home/home.component';
import { LoginComponent } from './authentication-components/login/login.component';
import { ForgotPasswordComponent } from './authentication-components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './authentication-components/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: 'forgot-password', component: LoginComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/login' },
  // { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
