import { Injectable } from '@angular/core';

import { serverTimestamp } from 'firebase/firestore';
import {
  addDoc,
  collection,
  collectionGroup,
  doc,
  docData,
  Firestore,
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';

import {
  Observable,
  of,
  map,
  mergeMap,
  groupBy,
  zip,
  toArray,
  BehaviorSubject,
  from,
} from 'rxjs';
import { Link } from '../models/link';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  constructor(private firestore: Firestore) {}

  getLinkBySlug(slug: string) {
    const ref = doc(this.firestore, 'links-temp', slug);
    return docData(ref);
  }

  getLinkByUrl() {

  }

  addLink(link: Link) {
    let ref;
    if (link.active === false) {
      // LINK INACTIVE
      ref = doc(this.firestore, 'links-inactive', link.slug);
    } else if (link.public === true) {
      // LINK ACTIVE - PUBLIC
      ref = doc(this.firestore, 'links-public', link.slug);
    } else {
      // LINK ACTIVE - PRIVATE
      ref = doc(this.firestore, 'links-private', link.slug);
    }
    return from(setDoc(ref, { ...link, dateCreated: serverTimestamp() }));
  }
}
