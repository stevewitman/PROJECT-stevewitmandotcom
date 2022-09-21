import { Component, OnInit } from '@angular/core';

import { Animations } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  animations: [Animations.pageTransition],
})
export class ProjectsPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
