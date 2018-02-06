import { Component, OnInit } from '@angular/core';
import { Editor } from '../app.component'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addProof() {
    alert('hi');
  }

}
