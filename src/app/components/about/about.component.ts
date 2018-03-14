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
      description: "dope guy",
      pic: "../../../assets/images/frank.jpg"
    },
    {
      name: "Giorgio Catania",
      description: "cool guy",
      pic: "../../../assets/images/giorgio.jpg"
    },
    {
      name: "Micah Benn",
      description: "neat guy",
      pic: "../../../assets/images/micah.jpeg"
    },
    {
      name: "Drake Ramsdall",
      description: "sick guy",
      pic: "../../../assets/images/drake.jpg"
    },
    {
      name: "Damir Kaliyev",
      description: "nice guy",
      pic: "../../../assets/images/damir.jpg"
    },
    {
      name: "Zach Rhodes",
      description: "big guy",
      pic: "../../../assets/images/zach.jpg"
    },
    {
      name: "James Maynard",
      description: "old guy",
      pic: "../../../assets/images/james.jpg"
    },
    {
      name: "Josh Myers",
      description: "Hailing from Moorpark, CA, Josh finds enjoyment in eating, playing basketball, and chocolate chip cookies (yes, it's a hobby). One of his fondest memories at Pepperdine should not be disclosed on the public domain, but it involves himself, James Maynard, Korean BBQ, and an exam 4 hours later.",
      pic: "../../../assets/images/josh.jpg"
    }
  ];

}
