import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BlogAndNote } from '../../admin-models/blog-and-note';

@Component({
  selector: 'app-admin-blog-list',
  templateUrl: './admin-blog-list.component.html',
  styleUrls: ['./admin-blog-list.component.scss'],
})
export class AdminBlogListComponent implements OnInit {
  @Input() item!: BlogAndNote;
  @Input() listFilterForm: any;
  @Output() itemSelectedEvent = new EventEmitter<BlogAndNote>();

  constructor() {}

  ngOnInit(): void {}

  itemSelected(item: BlogAndNote) {
    this.itemSelectedEvent.emit(item);
  }
}
  