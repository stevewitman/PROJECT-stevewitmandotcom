import { Component, OnInit } from '@angular/core';

import { Animations } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  animations: [Animations.pageTransition],
})
export class BlogPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
