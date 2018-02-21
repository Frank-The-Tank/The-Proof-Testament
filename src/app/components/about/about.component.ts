import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contributors = [
    {
      name: "Frank",
      description: "dope guy"
    },
    {
      name: "Josh",
      description: "dope guy"
    }
  ];

}
