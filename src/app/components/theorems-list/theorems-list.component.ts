import {Component, Input, OnInit} from '@angular/core';
import {Theorem} from '../../model/theorem';
declare var MathJax: any;
import { ScrollableDirective } from '../../directives/scrollable.directive'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-theorems-list',
  templateUrl: './theorems-list.component.html',
  styleUrls: ['./theorems-list.component.scss']
})
export class TheoremsListComponent implements OnInit {

  @Input()
  theorems: Theorem[];

  constructor() { }

  ngOnInit() {
  }

  scrollHandler(e) {
    console.log(e);
  }

  setBackgroundColor(type) {
    if (type === 'axiom') {
      return '#00025c';
    } else {
      return '#ee7624';
    }
  }

  ngAfterContentChecked() {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
  }

}
