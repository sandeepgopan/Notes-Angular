import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication-components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './authentication-components/login-form/login-form.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { RegisterFormComponent } from './authentication-components/register-form/register-form.component';
import { HomeComponent } from './home-components/home/home.component';
import { ForgotPasswordComponent } from './authentication-components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './authentication-components/verify-email/verify-email.component';
import { ModalComponent } from './reusable-components/modal/modal.component';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { DirectoryComponent } from './home-components/directory/directory.component';
import { AllnotesComponent } from './home-components/allnotes/allnotes.component';
import { AboutComponent } from './home-components/about/about.component';
import { LogoutComponent } from './home-components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomeComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ModalComponent,
    DirectoryComponent,
    AllnotesComponent,
    AboutComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [MdbModalService],
  bootstrap: [AppComponent],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],
})
export class AppModule {}
