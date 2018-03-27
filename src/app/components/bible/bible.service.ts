import {Observable} from 'rxjs/Observable';
import {Theorem} from '../../model/theorem';
import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class BibleService {

  pageSize = 10;

  pageSizeChange: Subject<number> = new Subject<number>();

  constructor(private af: AngularFireDatabase) {}

  findAllTheorems(): Observable<Theorem[]> {

    return this.af.list('theorems', ref => {
      return ref.limitToFirst(this.pageSize).orderByKey();
    }).valueChanges().map(Theorem.fromJsonList);

    //return this.af.list('theorems').valueChanges().map(Theorem.fromJsonList);

  }

  updatePageSize(num) {
    this.pageSizeChange.next(num);
  }

}
