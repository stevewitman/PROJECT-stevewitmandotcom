import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { User } from '@angular/fire/auth';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminRouteGuard implements CanActivate {
  
  userAuthStatus$: Observable<User | null> = of(null);

  constructor(private authService: AuthService) {
    this.userAuthStatus$ = this.authService.getUserAuthState();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAdmin;
  } 
} 
