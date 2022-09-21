import { Component, OnInit } from '@angular/core';

import { Animations } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-volunteer-page',
  templateUrl: './volunteer-page.component.html',
  styleUrls: ['./volunteer-page.component.scss'],
  animations: [Animations.pageTransition],
})
export class VolunteerPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
