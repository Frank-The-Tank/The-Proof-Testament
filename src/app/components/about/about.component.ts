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
      name: "Frank Garcia",
      description: "dope guy"
    },
    {
      name: "Giorgio",
      description: "cool guy"
    },
    {
      name: "Micah Benn",
      description: "neat guy"
    }
    {
      name: "Drake Ramdall",
      description: "sick guy"
    }
    {
      name: "Damir Kaliyev",
      description: "nice guy"
    }
    {
      name: "Zach Rhodes",
      description: "big guy"
    }
    {
      name: "James Maynard",
      description: "old guy"
    }
    {
      name: "Josh Myers",
      description: "funny guy"
    }
  ];

}
