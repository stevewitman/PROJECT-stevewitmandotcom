import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable, of } from 'rxjs';

import { BlogService } from '../services/blog.service';
import { MarkdownService } from '../services/markdown.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  @Input() blogHTML$: Observable<string> = of('');
  title = 'Build Your Own Blog On Your Angular Site';
  description =
    'This is a work-in-progress, a small sample of the workshop/tutorial and has not been shared publicly. If selected I will make it private until the conf and at that time, if desired, only be made available to attendees for some period of time before posting publicly (it will always be free content)';
  type = 'blog';

  // blogMarkdown$: Observable<string> = of('');
  // blogHTML$: Observable<string> = of('');
  // id: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private markdownService: MarkdownService
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.id = params.get('id');
    //   this.blogMarkdown$ = this.blogService.getBlog(this.id!);
    //   this.blogHTML$ = this.markdownService.parseMarkdown(this.blogMarkdown$);
    // });
  }
}
