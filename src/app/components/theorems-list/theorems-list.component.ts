import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Theorem} from '../../model/theorem';
declare var MathJax: any;
import { ScrollableDirective } from '../../directives/scrollable.directive'
import { Observable } from 'rxjs/Observable';
import { BibleService } from '../bible/bible.service';

@Component({
  selector: 'app-theorems-list',
  templateUrl: './theorems-list.component.html',
  styleUrls: ['./theorems-list.component.scss']
})
export class TheoremsListComponent implements OnInit {

  @Input() theorems: Theorem[];
  @ViewChild('holder', {read: ElementRef}) public holder: ElementRef<any>;

  constructor(private service: BibleService) {}

  ngOnInit() {
  }

  scrollHandler(e) {
    console.log(e);
    if (e === 'bottom') {
      console.log('EEEEEEHHHHH');
      this.service.updatePageSize(this.service.pageSize + 10);
      this.holder.nativeElement.scrollTop -= 20;
    }
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
