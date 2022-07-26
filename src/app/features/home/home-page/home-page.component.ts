import { Component, OnInit } from '@angular/core';
import { EmailAuthCredential } from '@angular/fire/auth';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  showEmail = false;

  constructor() {}

  ngOnInit(): void {}

  toggleEmail() {
    this.showEmail = !this.showEmail;
  }


}
