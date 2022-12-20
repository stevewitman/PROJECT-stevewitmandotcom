import { Component, OnInit } from '@angular/core';

import { Animations } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.scss'],
  animations: [Animations.pageTransition],
})
export class BlogDetailPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
