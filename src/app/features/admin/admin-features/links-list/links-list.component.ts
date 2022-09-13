import { Component, HostListener, Input, OnInit } from '@angular/core';

import { from, Observable } from 'rxjs';

import { Link } from 'src/app/core/models/link';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss'],
})
export class LinksListComponent implements OnInit {
  @Input() linksAll$: Observable<Link[]> = from([]);

  constructor() {}

  ngOnInit(): void {}

  linkDetails(link: Link) {
    console.log(
      '%cTODO: Link Details Component to edit or delete link',
      'background: #F800D710; color: #F800D7;',
      link
    );
  }
}
