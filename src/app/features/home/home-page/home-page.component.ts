import { Component, OnInit } from '@angular/core';

import { Animations } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [Animations.pageTransition],
})
export class HomePageComponent implements OnInit {
  showEmail = false;

  constructor() {}

  ngOnInit(): void {}

  toggleEmail() {
    this.showEmail = !this.showEmail;
  }
}
