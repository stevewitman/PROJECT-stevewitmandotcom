import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BlogAndNote } from '../../admin-models/blog-and-note';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  @Input() blogList: BlogAndNote[] = [];
  @Output() newPostEvent = new EventEmitter();
  @Output() itemSelectedEvent = new EventEmitter<BlogAndNote>();

  listFilterForm = new FormGroup({
    postTypeCtrl: new FormControl('showBlogPosts'),
    showDescriptions: new FormControl(true),
    showTags: new FormControl(true),
  });

  descriptionFilterToggle = true;
  tagsFilterToggle = true;

  newPost() {
    this.newPostEvent.emit();
  }

  itemSelected(item: BlogAndNote) {
    this.itemSelectedEvent.emit(item)
  }

}
