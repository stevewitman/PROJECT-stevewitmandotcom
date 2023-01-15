import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-admin-blog-edit',
  templateUrl: './admin-blog-edit.component.html',
  styleUrls: ['./admin-blog-edit.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('300ms ease-in-out', style({ height: 320, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: 320, opacity: 1 }),
        animate('300ms ease-in-out', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class AdminBlogEditComponent implements OnInit {
  private currentDate = new Date();
  collapseForm = false;
  
  blogForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    tags: new FormControl(['']),
    author: new FormControl('Steve Witman'),
    created: new FormControl(''),
    updated: new FormControl(''),
    blog: new FormControl(false),
    public: new FormControl(false),
    archive: new FormControl(false),
    markdown: new FormControl(''),
  });

  // constructor(private blogService: BlogService) {}

  ngOnInit(): void {}
}
