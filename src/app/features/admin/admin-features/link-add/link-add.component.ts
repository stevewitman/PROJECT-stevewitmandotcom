import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';

import { LinksService } from 'src/app/core/services/links.service';
import { Link } from 'src/app/core/models/link';

@Component({
  selector: 'app-link-add',
  templateUrl: './link-add.component.html',
  styleUrls: ['./link-add.component.scss'],
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
export class LinkAddComponent implements OnInit {
  linkForm = new FormGroup({
    url: new FormControl(''),
    slug: new FormControl(''),
    title: new FormControl(''),
    notes: new FormControl(''),
    active: new FormControl(false),
    public: new FormControl(false),
    show: new FormControl(false),
  });

  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    this.linkForm.controls['url'].valueChanges.subscribe((change: any) => {
      // console.log(change); // Value inside the input field as soon as it changes
    });
  }

  clearForm() {
    this.linkForm.controls.url.setValue('');
    this.linkForm.controls.slug.setValue('');
    this.linkForm.controls.title.setValue('');
    this.linkForm.controls.notes.setValue('');
    this.linkForm.controls.active.setValue(false);
    this.linkForm.controls.public.setValue(false);
    this.linkForm.controls.show.setValue(false);
    this.linkForm.markAsPristine();
    this.linkForm.markAsUntouched();
  }

  cancel() {
    this.clearForm();
  }

  addLink() {
    // console.log(this.linkForm.value)
    this.linksService.addLink(this.linkForm.value as Link);
    this.clearForm();
  }
}
