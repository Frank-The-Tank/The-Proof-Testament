import {Observable} from 'rxjs/Observable';
import {Theorem} from '../../model/theorem';
import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class BibleService {

  pageSize = 10;
  pageSize$: Subject<number> = new Subject<number>();

  constructor(private af: AngularFireDatabase) {}

  findAllTheorems(): Subject<Theorem[]> {
    return this.af.list('theorems').valueChanges().map(Theorem.fromJsonList);
  }

  fillFirstTheorems(): Subject<Theorem[]> {
    return this.af.list('theorems', ref => {
      return ref.limitToFirst(10).orderByKey();
    }).valueChanges().map(Theorem.fromJsonList);
  }

  updateTheoremCount(size): Subject<Theorem[]> {
    return this.af.list('theorems', ref => {
      return ref.limitToFirst(size).orderByKey();
    }).valueChanges().map(Theorem.fromJsonList);
  }

  updatePageSize(num) {
    this.pageSize$.next(num);
    this.pageSize = this.pageSize + 10;
  }

}
