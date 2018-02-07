import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { BibleService } from './bible.service';
import {Theorem} from '../../model/theorem';


@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {

  allTheorems: Theorem[];
  filtered: Theorem[];

  constructor(private service: BibleService) {}

  ngOnInit() {
    this.service.findAllTheorems()
      .do(console.log)
      .subscribe(
        theorems => this.allTheorems = this.filtered = theorems
      );
  }

  search(search: string) {
    this.filtered = this.allTheorems.filter(
      theorem => theorem.rule.includes(search) ||
       (theorem.name && theorem.name.toLowerCase().includes(search.toLowerCase())
    );
  }

}
