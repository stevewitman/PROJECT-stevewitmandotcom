import { Component, Input, OnInit } from '@angular/core';
import { BlogAndNote } from '../../admin-models/blog-and-note';

@Component({
  selector: 'app-admin-blog-list',
  templateUrl: './admin-blog-list.component.html',
  styleUrls: ['./admin-blog-list.component.scss'],
})
export class AdminBlogListComponent implements OnInit {
  @Input() item!: BlogAndNote;
  @Input() listFilterForm: any;

  constructor() {}

  ngOnInit(): void {}

  itemClicked(item: BlogAndNote) {
    console.log('CLICKED:', item);
  }
}
  