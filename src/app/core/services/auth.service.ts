import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { map, Observable, of, Subscription, tap } from 'rxjs';

import {
  Auth,
  User,
  getAuth,
  authState,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  userAuthState$: Observable<User | null> = of(null);
  subUserAuthState$: Subscription | null = null;

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router
  ) {
    this.userAuthState$ = authState(this.auth);
  }

  ngOnDestroy(): void {
    this.subUserAuthState$?.unsubscribe()
  }

  getUserAuthState() {
    return this.userAuthState$;
  }

  get isAdmin(): Observable<boolean> {
    return this.userAuthState$.pipe(
      map((user) => {
        if (user?.email === 'stevewitman@gmail.com') {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  async signInWithGoogle() {
    const googleAuthProvider = new GoogleAuthProvider();
    const googleAuth = getAuth();
    await signInWithPopup(googleAuth, googleAuthProvider).then((result) => {
      if (result.user.email !== 'stevewitman@gmail.com') {
        console.error('Only admin login allowed')
        this.signOutWithGoogle()
        return
      } else {
        console.log('Signed In With Google');
        this.updateUserData(result.user);
        return this.router.navigate(['/admin']);
      }
    });
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   const email = error.email;
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   console.log('[AuthService] ERROR while signing in !!!');
    //   console.log('[AuthService] ERROR code:', errorCode);
    //   console.log('[AuthService] ERROR messagee:', errorMessage);
    //   console.log('[AuthService] ERROR email:', email);
    //   console.log('[AuthService] ERROR credential:', credential);
    // });
  }

  updateUserData(user: User) {
    const userRef = doc(this.firestore, `users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoURL,
    };
    return setDoc(userRef, data, { merge: true });
  }

  async signOutWithGoogle() {
    const auth = getAuth();
    await signOut(auth)
      .then(() => {
        console.log('Signed Out With Google');
      })
      .catch((error) => {
        console.log('[AuthService] ERROR while signing out', error);
      });
  }
}
