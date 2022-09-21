import { Component, OnInit } from '@angular/core';

import { Animations } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss'],
  animations: [Animations.pageTransition],
})
export class ResumePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
