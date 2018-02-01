import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { BibleService } from './bible.service';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
declare var MathJax: any;

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {

  bibleObservable$: FirebaseListObservable<any[]>;

  constructor(service: BibleService, private db: AngularFireDatabase) {
    this.bibleObservable$ = service.getTheorems(db);
  }

  ngAfterContentChecked(){
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  }

  ngOnInit() {}

  scrollHandler(event) {
    if (event === 'top') {
      console.log('Top touched');
    } else if (event === 'top') {
      console.log('Bottom touched');
    }
  }

  setBackgroundColor(type) {
    if (type === 'axiom') {
      return 'lightsalmon';
    } else {
      return '#bee5eb';
    }
  }
}
