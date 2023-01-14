import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss'],
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
export class BlogAddComponent implements OnInit {
  private currentDate = new Date();
  collapseForm = false;
  
  blogForm = new FormGroup({
    title: new FormControl(''),
    slug: new FormControl(''),
    author: new FormControl('Steve Witman'),
    dateCreated: new FormControl('Steve Witman'),
    active: new FormControl(false),
    public: new FormControl(false),
    show: new FormControl(false),
  });

  // constructor(private blogService: BlogService) {}

  ngOnInit(): void {}
}
