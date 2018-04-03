import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  contributors = [
    {
      name: "Frank Garcia",
      title: "Project Lead / Full-Stack Developer",
      description: "Born in Tucson, Arizona, Frank has a passion for software development on a range of platforms including web, mobile, and desktop. He has created multiple software solutions for Pepperdine University and is pursing a career in iOS, Web, or Blockchain development post graduation.",
      projects: [
        'The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>',
        'Slopes Differential Equations: <a href="https://itunes.apple.com/us/app/slopes-differential-equations/id1136920301?mt=8" target="_blank">App Store</a>',
        'Pepperdine University NetEvent Alert System: <a href="https://community.pepperdine.edu/it/about/careers/appdeveloper.htm" target="_blank">NetEvent</a>',
        'Pep9Pad: <a href="https://github.com/StanWarford/pep9pad" target="_blank">GitHub</a>',
        'Tower Defense: <a href="https://github.com/Frank-The-Tank/TowerDefense" target="_blank">GitHub</a>'
      ],
      linkedIn: 'https://www.linkedin.com/in/frank-garcia-35b456106/',
      gitHub: 'https://github.com/Frank-The-Tank',
      facebook: 'https://www.facebook.com/frank.garcia.16',
      twitter: '#',
      pic: "../../../assets/images/frank.jpg"
    },
    {
      name: "Giorgio Catania",
      title: "Antlr/Quilljs Developer",
      description: "cool guy",
      projects: ['The Proof Testament: LINK', 'The Second Proof Testament: LINK'],
      linkedIn: '#',
      gitHub: '#',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/giorgio.jpg"
    },
    {
      name: "Micah Benn",
      title: "Back-End Software Developer",
      description: "neat guy",
      projects: ['The Proof Testament: LINK', 'The Second Proof Testament: LINK'],
      linkedIn: '#',
      gitHub: '#',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/micah.jpeg"
    },
    {
      name: "Drake Ramsdall",
      title: "Front-End Software Developer",
      description: "sick guy",
      projects: ['The Proof Testament: LINK', 'The Second Proof Testament: LINK'],
      linkedIn: '#',
      gitHub: '#',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/drake.jpg"
    },
    {
      name: "Damir Kaliyev",
      title: "Front-End Software Developer",
      description: "nice guy",
      projects: ['The Proof Testament: LINK', 'The Second Proof Testament: LINK'],
      linkedIn: '#',
      gitHub: '#',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/damir.jpg"
    },
    {
      name: "Zach Rhodes",
      title: "Database Development and Management",
      description: "big guy",
      projects: ['The Proof Testament: LINK', 'The Second Proof Testament: LINK'],
      linkedIn: '#',
      gitHub: '#',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/zach.jpg"
    },
    {
      name: "James Maynard",
      title: "Front-End Software Developer",
      description: 'This is James. James is a proud Naperville native. James will rave for hours about Chicago deep dish pies. James has a wide variety of catchphrases, including “dope”, “fasho”, and “I’m the man.” James’ idol is Ross Rhea ("Goon" or bust).',
      projects: ['The Proof Testament: LINK', 'The Second Proof Testament: LINK'],
      linkedIn: '#',
      gitHub: '#',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/james.jpg"
    },
    {
      name: "Josh Myers",
      title: "Front-End Software Developer",
      description: "Hailing from Moorpark, CA, Josh finds enjoyment in eating, playing basketball, and chocolate chip cookies (yes, it's a hobby). One of his fondest memories at Pepperdine should not be disclosed on the public domain, but it involves himself, James Maynard, Korean BBQ, and an exam 4 hours later.",
      projects: ['The Proof Testament: LINK', 'The Second Proof Testament: LINK'],
      linkedIn: '#',
      gitHub: '#',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/josh.jpg"
    }
  ];

  constructor() { }

  ngOnInit() {
  }



}
