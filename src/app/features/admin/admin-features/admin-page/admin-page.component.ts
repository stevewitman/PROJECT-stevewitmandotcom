import { Component, OnInit } from '@angular/core';

import { LinksService } from 'src/app/core/services/links.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  constructor(private linksService: LinksService) {}

  ngOnInit(): void {}

  queryForSlug(slug: string) {
    const result = this.linksService.getLinkBySlug(slug);
    result.subscribe(res => {
      console.log("RESULT:", res)
    })
  };
}
