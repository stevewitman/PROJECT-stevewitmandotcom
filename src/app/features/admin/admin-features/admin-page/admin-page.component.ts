import { Component, OnInit } from '@angular/core';

import { Animations } from 'src/app/core/animations/animations';
import { LinksService } from 'src/app/core/services/links.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  animations: [Animations.pageTransition],
})
export class AdminPageComponent implements OnInit {
  constructor(private linksService: LinksService) {}

  ngOnInit(): void {}
}
