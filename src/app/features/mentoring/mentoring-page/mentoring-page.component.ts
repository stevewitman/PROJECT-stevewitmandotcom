import { Component, OnInit } from '@angular/core';

import { Animations } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-mentoring-page',
  templateUrl: './mentoring-page.component.html',
  styleUrls: ['./mentoring-page.component.scss'],
  animations: [Animations.pageTransition],
})
export class MentoringPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
