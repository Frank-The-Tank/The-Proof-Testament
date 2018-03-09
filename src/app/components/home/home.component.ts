import { Component, OnInit} from '@angular/core';
import {EditorService} from '../editor/editor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  infoFilled = this.editorService.infoFilled;

  constructor(private editorService: EditorService) {}

  ngOnInit() {
  }


}
