import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BibleService } from './bible.service';
declare var MathJax: any;

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

  ngAfterContentChecked(){
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  }

  ngOnInit() {}

  scrollHandler(event) {
    if (event == 'top') {
      console.log("Top touched");
    } else if (event == 'top') {
      console.log("Bottom touched");
    }
  }


}
