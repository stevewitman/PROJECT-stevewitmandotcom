import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-admin-blog-page',
  templateUrl: './admin-blog-page.component.html',
  styleUrls: ['./admin-blog-page.component.scss'],
})
export class AdminBlogPageComponent implements OnInit {
  blogHTML$ = of('<h1>Test</h1>')

  constructor() {}

  ngOnInit(): void {}
}
