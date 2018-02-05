import {Component, Input, OnInit} from '@angular/core';
import {Theorem} from '../../model/theorem';
declare var MathJax: any;

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

  ngAfterContentChecked() {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
  }

}
