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
  // data: Array<{
  //   title: string;
  //   scribble: string;
  //   category: string;
  //   owner: string;
  // }> = [];

  data: Array<any> = [];
  single: any = '';
  scribbles: Array<any> = [];

  constructor(
    private router: Router,
    // private firestore: AngularFirestore,
    // private auth: AuthService,
    private firebaseAuth: Auth,
    private firestore: AngularFirestore
  ) {
    authState(this.firebaseAuth).subscribe((response) => {
      // console.log(response);
      this.uid = response?.uid;
    });
  }
  ngOnInit(): void {
    this.loadScribblesFromDatabase();
  }
  newScribble() {
    this.router.navigate(['/scribble']);
  }
  loadScribblesFromDatabase() {
    this.firestore
      .collection('users')
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.data.push(doc.data());
          this.single = this.data[3];
          // console.log(Object.keys(this.data));
          // {owner: 'IiqXhN4lMcc8tXkx7DqjOZQFsuD3', scribble: '<h3 style="text-align: center;">This is a sample</…gn: center;">Hi there, this is a sample test.</p>', title: 'Sample Title Name', category: 'All'}
        });
        this.data.forEach((d) => {
          this.scribbles.push(d.scribble);
        });
        console.log(this.data);
      });
  }
}
