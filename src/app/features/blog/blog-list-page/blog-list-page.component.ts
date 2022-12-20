import { Component, OnInit } from '@angular/core';

import { Animations } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-blog-list-page',
  templateUrl: './blog-list-page.component.html',
  styleUrls: ['./blog-list-page.component.scss'],
  animations: [Animations.pageTransition],
})
export class BlogListPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
