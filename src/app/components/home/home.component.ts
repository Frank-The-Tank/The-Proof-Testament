import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { EditorComponent } from '../editor/editor.component';

import * as Quill from 'quill';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('editorContainer', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
  }

  addEditor() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(EditorComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  export() {

    const textBoxes = document.getElementsByClassName("ql-editor");

    // console.log(container.getElementsByTagName('p')[0].textContent);

    var output = "";

    for (var i = 0; i < textBoxes.length; i++) {
      var textBox = textBoxes[i];

      output += "# Exercise " + (i + 1) + "\n" + textBox.innerHTML + "\n";
    }

    console.log(output);
  }
}
