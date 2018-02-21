import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss']
})
export class AboutUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  name: string;
  @Input()
  description: string;

}
