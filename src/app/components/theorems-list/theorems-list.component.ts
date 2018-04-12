import {Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild, AfterContentChecked} from '@angular/core';
import {Theorem} from '../../model/theorem';
import { BibleService } from '../bible/bible.service';
declare var MathJax: any;
@Component({
  selector: 'app-theorems-list',
  templateUrl: './theorems-list.component.html',
  styleUrls: ['./theorems-list.component.scss']
})
export class TheoremsListComponent implements OnInit, AfterContentChecked {

  @Input() theorems: Theorem[];
  @Output() clickEvent = new EventEmitter();
  @ViewChild('holder', {read: ElementRef}) public holder: ElementRef;

  loading = true;

  constructor(private service: BibleService) {}

  ngOnInit() {
    this.loading = true;
  }

  scrollHandler(e) {
    if (e === 'bottom') {
      this.service.updatePageSize(this.service.pageSize + 10);
      this.holder.nativeElement.scrollTop -= 20;
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
