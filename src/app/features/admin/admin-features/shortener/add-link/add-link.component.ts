import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('300ms ease-in-out', style({ height: 220, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: 300, opacity: 1 }),
        animate('300ms ease-in-out', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class AddLinkComponent implements OnInit {
  linkForm = new FormGroup({
    fullUrl: new FormControl(''),
    shortUrl: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    active: new FormControl(''),
    public: new FormControl(''),
    show: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    this.linkForm.controls['fullUrl'].valueChanges.subscribe((change: any) => {
      console.log(change); // Value inside the input field as soon as it changes
    });
  }

  clearForm() {
    this.linkForm.controls.fullUrl.setValue('');
    this.linkForm.controls.shortUrl.setValue('');
    this.linkForm.controls.title.setValue('');
    this.linkForm.controls.description.setValue('');
    this.linkForm.controls.active.setValue('');
    this.linkForm.controls.public.setValue('');
    this.linkForm.controls.show.setValue('');
    this.linkForm.markAsPristine();
    this.linkForm.markAsUntouched();
  }

  cancel() {
    this.clearForm();
  }

  addLink() {
    console.log(this.linkForm.value)
  }
}