import {Observable} from 'rxjs/Observable';
import {Theorem} from '../../model/theorem';
import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from '@angular/core';

@Injectable()
export class BibleService {

  constructor(private af: AngularFireDatabase) {}

  findAllTheorems(): Observable<Theorem[]> {

    // return this.af.list('theorems', ref => {
    //   return ref.limitToFirst(pageSize).orderByKey();
    // }).valueChanges().map(Theorem.fromJsonList);

    return this.af.list('theorems').valueChanges().map(Theorem.fromJsonList);

  }

}
