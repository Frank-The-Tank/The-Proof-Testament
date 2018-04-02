import {Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild} from '@angular/core';
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
  @Output() clickEvent = new EventEmitter();
  @ViewChild('holder', {read: ElementRef}) public holder: ElementRef;

loading: boolean = true;

  constructor(private service: BibleService) {}

  ngOnInit() { this.loading = true;
  }

  scrollHandler(e) {
    console.log(e);
    if (e === 'bottom') {
      this.loading = true;
      console.log('EEEEEEHHHHH');
      this.service.updatePageSize(this.service.pageSize + 10);
      this.holder.nativeElement.scrollTop -= 20;
      this.loading = false;
    }
  }

  setBackgroundColor(type) {
    if (type === 'axiom') {
      return '#82ac60';
    } else {
      return '#353535';
    }
  }

  ngAfterContentChecked() {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
  }

  insertTheorem(name) {
    this.clickEvent.emit(name);
  }

}
