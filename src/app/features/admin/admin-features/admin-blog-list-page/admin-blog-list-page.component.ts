import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { BlogService } from 'src/app/core/services/blog.service';
import { BlogAndNote } from '../../admin-models/blog-and-note';

@Component({
  selector: 'app-admin-blog-list-page',
  templateUrl: './admin-blog-list-page.component.html',
  styleUrls: ['./admin-blog-list-page.component.scss'],
})
export class AdminBlogListPageComponent implements OnInit {
  blogList: BlogAndNote[] = [];

  listFilterForm = new FormGroup({
    postTypeCtrl: new FormControl('showBlogPosts'),
    showDescriptions: new FormControl(true),
    showTags: new FormControl(true),
  });

  descriptionFilterToggle = true;
  tagsFilterToggle = true;

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.blogList = this.blogService.getBlogList();
  }

  newPostEvent() {
    this.router.navigate(['admin/blog/edit']);
  }

  itemSelected(item: BlogAndNote) {
    console.log('View:', item.slug);
    // retrieve markdownshow AND show details view
  }
}
