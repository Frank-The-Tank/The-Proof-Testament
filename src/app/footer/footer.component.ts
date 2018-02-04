import { Component, OnInit, Input } from '@angular/core';
import { Editor } from '../app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent implements OnInit {

  @Input() editor: Editor;

  // test: string = "test"
  constructor() { }

  ngOnInit() {
  }

  addProof() {
    var node = document.getElementsByClassName("col-md-7");
    var newEditor = document.createTextNode("water");
    node.appendChild(newEditor);
  
  }

}
