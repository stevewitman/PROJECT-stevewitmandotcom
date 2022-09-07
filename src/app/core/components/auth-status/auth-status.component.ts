import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of, take, mergeMap } from 'rxjs';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-auth-status',
  templateUrl: './auth-status.component.html',
  styleUrls: ['./auth-status.component.scss'],
})
export class AuthStatusComponent {
  @Input() isHandset$: Observable<boolean | null> = of(null);
  @Input() userAuthStatus$: Observable<User | null> = of(null);
  @Output() signInWithGoogle = new EventEmitter<boolean>();
  @Output() signOutWithGoogle = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  onSignIn() {
    this.signInWithGoogle.emit(true);
  }

  onSignOut() {
    this.signOutWithGoogle.emit(true);
    this.router.navigate([''])
  }

}
