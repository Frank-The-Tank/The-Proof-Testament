import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {BibleService} from './bible.service';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {

  bibleObservable$: Observable<any[]>;

  constructor(service: BibleService, private db: AngularFireDatabase) {
    this.bibleObservable$ = service.getTheorems(db);
  }

  ngOnInit() {}

}
