import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import {
  animate,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

// import { User } from '@angular/fire/auth';
import { Observable, of, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { User } from '@angular/fire/auth';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('staggerList', [
      transition(':enter', [
        style({ height: '0px' }),
        group([
          animate('250ms ease-in-out', style({ height: '*', opacity: 1 })),
          query('a', style({ opacity: 0 }), { optional: true }),
          query(
            'a',
            stagger('40ms', [
              animate(
                '40ms ease-in-out',
                style({
                  opacity: 1,
                })
              ),
            ]),
            { optional: true }
          ),
        ]),
      ]),
      transition(':leave', [
        style({ height: '*' }),
        group([
          animate('250ms ease-out', style({ height: '0px', opacity: 1 })),
          query('a', style({ opacity: 1 }), { optional: true }),
          query(
            'a',
            stagger('-40ms', [
              animate(
                '40ms ease-out',
                style({
                  opacity: 0,
                })
              ),
            ]),
            { optional: true }
          ),
        ]),
      ]),
    ]),
    trigger('routeAnimations', [
      transition('* <=> *', [style({ opacity: 0 }), animate('400ms ease-in')]),
    ]),
  ],
})
export class HeaderNavComponent implements OnInit, AfterViewInit, OnDestroy {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  isHandsetSub$: Subscription | null = null;
  
  isHandset!: boolean;
  
  userAuthStatus$: Observable<User | null> = of(null);

  isAdmin$: Observable<boolean> = of(false);

  active$: any

  constructor(
    private breakpointObserver: BreakpointObserver,
    private changeDetectorRef: ChangeDetectorRef,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // TODO handle subscription
    this.isHandsetSub$ = this.isHandset$.subscribe((value) => {
      this.isHandset = value;
    });
    this.userAuthStatus$ = this.authService.getUserAuthState();
    this.isAdmin$ = this.authService.isAdmin;
    this.active$ = this.router
  }
  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
    if (this.isHandsetSub$) {
      this.isHandsetSub$.unsubscribe();
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['position']
    );
  }

  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then(() => {
        // Sign-in successful.
      })
      .catch((error) => {
        // An error happened.
        console.log('ERROR occurred while Signing In With Google...');
        console.log('ERROR message:', error);
      });
  }

  signOutWithGoogle() {
    this.authService
      .signOutWithGoogle()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log('ERROR occurred while Signing Out With Google...');
        console.log('ERROR message:', error);
      });
  }

}
