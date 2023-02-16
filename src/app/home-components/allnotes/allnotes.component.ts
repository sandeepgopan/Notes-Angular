import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AuthService } from 'src/app/shared/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Auth, authState } from '@angular/fire/auth';
import tinymce from 'tinymce';

@Component({
  selector: 'app-allnotes',
  templateUrl: './allnotes.component.html',
  styleUrls: ['./allnotes.component.css'],
})
export class AllnotesComponent implements OnInit {
  uid: any = '';

  constructor(
    private router: Router,
    // private firestore: AngularFirestore,
    // private auth: AuthService,
    private firebaseAuth: Auth
  ) {
    authState(this.firebaseAuth).subscribe((response) => {
      console.log(response);
      this.uid = response?.uid;
    });
  }
  ngOnInit(): void {}
  newScribble() {
    this.router.navigate(['/scribble']);
  }
}
