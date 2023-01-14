import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { MarkdownService } from '../services/markdown.service';

@Component({
  selector: 'app-blog-edit-page',
  templateUrl: './blog-edit-page.component.html',
  styleUrls: ['./blog-edit-page.component.scss'],
})
export class BlogEditPageComponent implements OnInit {
  blogHTML$: any;
  current: string = '';

  constructor(
    private markdownService: MarkdownService
  ) {}

  ngOnInit(): void {}

  parse(eventValue: string) {
    this.blogHTML$ = this.markdownService.parseMarkdown(of(eventValue));
  }
}
