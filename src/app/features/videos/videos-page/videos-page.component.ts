import { Component, OnInit } from '@angular/core';

import { Animations } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss'],
  animations: [Animations.pageTransition],
})
export class VideosPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
