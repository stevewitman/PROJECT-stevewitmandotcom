import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { get } from 'http';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss'],
})
export class BlogEditComponent implements OnInit {
  @Output() currentMarkdown = new EventEmitter<string>();

  blogForm = new FormGroup({
    title: new FormControl(''),
    tags: new FormControl(''),
    markdown: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges(): void {
    this.blogForm.get('markdown')?.valueChanges.subscribe((val) => {
      if (val) {
        this.currentMarkdown.emit(val);
      }
    });
  }
}
