import { Component, OnInit, AfterContentChecked } from '@angular/core';
declare var MathJax: any; //tried adding this to maybe fix things
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

 ngAfterContentChecked() {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
  }

  ngOnInit() {}

}
