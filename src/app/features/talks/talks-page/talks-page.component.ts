import { Component, OnInit } from '@angular/core';

import { Animations } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-talks-page',
  templateUrl: './talks-page.component.html',
  styleUrls: ['./talks-page.component.scss'],
  animations: [Animations.pageTransition],
})
export class TalksPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
