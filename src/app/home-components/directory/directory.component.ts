import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (this.router.url === '/login') {
    }
  }
}
