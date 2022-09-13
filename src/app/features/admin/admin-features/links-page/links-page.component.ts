import { Component, OnInit } from '@angular/core';

import { from, Observable } from 'rxjs';

import { Link } from 'src/app/core/models/link';
import { LinksService } from 'src/app/core/services/links.service';

@Component({
  selector: 'app-links-page',
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.scss'],
})
export class LinksPageComponent implements OnInit {
  linksAll$: Observable<Link[]> = from([]);

  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    this.linksAll$ = this.linksService.getLinks();
  }
}
