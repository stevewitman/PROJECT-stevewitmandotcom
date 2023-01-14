import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogs: any = [
    {
      title: 'Create blog posts in your Angular app with Markdown',
      filename: 'Create-blog-posts-in-your-Angular-app-with-Markdown',
      dateCreated: '2022-12-14',
      author: 'Steve Witman',
      dateRevised: '',
      tags: ['testTag1', 'Another Tag'],
    },
    {
      title: 'Post 2',
      filename: 'Post-2',
      dateCreated: '2022-12-17',
      author: 'Steve Witman',
      dateRevised: '',
      tags: [],
    },
    {
      title: 'Post 3',
      filename: 'Post-3',
      dateCreated: '2022-12-18',
      author: 'Steve Witman',
      dateRevised: '',
      tags: [],
    },
    {
      title: 'Post 4',
      filename: 'Post-4',
      dateCreated: '2022-12-18',
      author: 'Steve Witman',
      dateRevised: '',
      tags: [],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
