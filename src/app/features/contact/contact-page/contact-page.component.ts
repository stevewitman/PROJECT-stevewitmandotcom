import { Component, OnInit } from '@angular/core';

import { Animations } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  animations: [Animations.pageTransition],
})
export class ContactPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
