import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { EditorComponent } from '../editor/editor.component';

import * as Quill from 'quill';

import { convert } from '../../convert/convert';

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
    convert();

    // Find the text boxes
    const textBoxes = document.getElementsByClassName("ql-editor");

    var output = "";

    // Loop through each text box
    for (var i = 0; i < textBoxes.length; i++) {
      const textBox = textBoxes[i];

      output += "# Exercise " + (i + 1) + "\n" + textBox.innerHTML + "# \n";
    }

    // Cleanup output manually. Method textContent fails to keep new lines.
    output = output.replace(/<p>/g, "");
    output = output.replace(/<\/p>/g, "\n");
    output = output.replace(/<br>/g, "\n")

    console.log(output);
  }
}
