import { Injectable, OnDestroy } from '@angular/core';

import {
  collection,
  collectionData,
  doc,
  Firestore,
  setDoc,
  serverTimestamp,
} from '@angular/fire/firestore';

import {
  Observable,
  BehaviorSubject,
  from,
  takeUntil,
  ReplaySubject
} from 'rxjs';
import { Link } from '../models/link';

@Injectable({
  providedIn: 'root',
})
export class LinksService implements OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  private links$ = new BehaviorSubject<Link[]>([]);

  constructor(private firestore: Firestore) {
    this.loadLinks();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  async loadLinks(): Promise<void> {
    const ref = collection(this.firestore, 'links');
    const data = (await collectionData(ref)) as Observable<Link[]>;
    data
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((data) => {
        this.links$.next(data);
      });
    console.log(
      '%cLoaded links from Firestore',
      'background: #FF6D0010; color: #FF6D00;'
    );
  }

  getLinks(): Observable<Link[]> {

    return this.links$;
  }

  addLink(link: Link) {
    const ref = doc(this.firestore, 'links', link.slug);
    console.log(
      `%cAdding link (${link.slug}) to Firestore`,
      'background: #FF6D0010; color: #FF6D00;'
    );
    return from(
      setDoc(ref, {
        ...link,
        visits: 0,
        dateCreated: serverTimestamp(),
      })
    );
  }
}
