import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AuthService } from 'src/app/shared/auth.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  user: any = '';
  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    private auth: AuthService
  ) {}
  ngOnInit(): void {
    this.user = this.auth.getUser();
    console.log('hi' + this.auth.getUser());
    // this.firestore.collection('users').add({
    //   name: 'Sample',
    //   roles: {},
    // });
  }
}
