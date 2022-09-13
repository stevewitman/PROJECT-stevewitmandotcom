import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { filter, Subject, takeUntil, tap } from 'rxjs';

import { Link } from 'src/app/core/models/link';
import { AuthService } from 'src/app/core/services/auth.service';
import { LinksService } from 'src/app/core/services/links.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  slug: string | null = null;
  link: any;
  isAdmin: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private linksService: LinksService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.isAdmin.subscribe(val => {
      this.isAdmin = val
    })
    this.slug = this.route.snapshot.paramMap.get('slug');
    // slug exists
    this.linksService
      .getLinkBySlug(this.slug!)
      .pipe(
        filter((i) => i !== undefined),
        tap((link) => {
          this.redirect(link);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.linksService
      .getLinkBySlug(this.slug!)
      .pipe(
        filter((i) => i === undefined),
        tap((link) => {
          // TODO log undifined link attempt
          this.router.navigate(['/404']);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  verifyRedirect(link: Link) {    
    if (link.active) {
      if (link.public || this.isAdmin) {
        return true;
      } else {
        console.log(
          '%cPrivate URL',
          'background: #F800D710; color: #F800D7;'
        );
        return false;
      }
    } else {
      return false;
    }
  }

  redirect(link: Link) {
    if (this.verifyRedirect(link)) {
      console.log('%cPrivate URL', 'background: #039BE510; color: #039BE5;');
      window.location.href = link.url;
    } else {
      console.log(
        '%cURL or Page is Not Available',
        'background: #F800D710; color: #F800D7;'
      );
      this.router.navigate(['/404']);
    }
  }
}
